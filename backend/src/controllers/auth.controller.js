import {db} from "../db/index.js";
import bcrypt from "bcryptjs";

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
export const login = async (req, res) => {};
export const logout = async (req, res) => {};


