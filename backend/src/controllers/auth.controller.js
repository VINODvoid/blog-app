import {db} from "../db/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register =  (req, res) => {
    //? checking if the user already exists
    const q= "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(q,[res.body.email, res.body.username], (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).json("Internal Server Error");
        }
        if(result.length > 0) {
            res.status(409).json("User already exists");
        }
    //? password hashing
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const values = [
        req.body.username,
        req.body.email,
        hash,
    ]
    db.query(q,[values],
        (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).json("Internal Server Error");
            }
            res.status(201).json("User created successfully");
        }
        )
    });
};
export const login = async (req, res) => {
    //? checking if the user exists
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q,[req.body.username], (err, result) => {
        if (err) return res.json(err);
        if (result.length === 0) return res.status(404).json("User not found");
    //? password validation
        const isPasswordValid = bcrypt.compareSync(req.body.password, result[0].password);
        if (!isPasswordValid) return res.status(401).json("Invalid credentials");
        const token = jwt.sign({id: result[0].id},"jwtkey");
        const {password,...other} = result[0]
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(other);
    });
};
export const logout = async (req, res) => {
    res.clearCookie("access_token",{
        sameSite: "none",
        secure: true,
    }).status(200).json("Logged out");
};


