import { db } from "../db/index.js";
import jwt from "jsonwebtoken";
export const getPosts = async (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE category = ?" : "SELECT * FROM posts";
    db.query(q,[req.query.cat], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(result);
    });
};
export const getPost = async (req, res) => {
    const q = "SELECT p.id,'username','title','desc',p.img,'date',u.img AS userImg ,'category' FROM users u JOINS posts p ON u.id = p.userId WHERE p.id = ?";
    db.query(q,[req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(result[0]);
    });
};
export const addPost = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.json({message: "User not authenticated"});
    
    const q = "INSERT INTO posts(`uid`,`title`,`desc`,`img`,`category`) VALUES(?,?,?,?,?)";
    const values = [
        req.body.uid,
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.category,
        req.body.date,
        userInfo.id
    ];
    db.query(q,[values], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(result);
    });
    
};
export const deletePost = async (req, res) => {
    
    jwt.verify(token,"jwtkey",(err,userInfo) =>{
        if (err) return res.status(403).json({message: "Token not valid"});
        const postId = req.params.id;
        const q = "DELETE FROM posts WHERE `id` = ? AND `userId` = ?";
        db.query(q,[postId,userInfo.id], (err, result) => {
            if (err) return res.status(500).json("You cannot delete this post");
            return res.status(200).json(result);
        });
    } )
};
export const updatePost = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.json({message: "User not authenticated"});

    const postId = req.params.id;
    const q = " UPDATE posts SET `title` = ?,`desc` = ?,`img` = ?,`category` = ? WHERE `id` = ? AND `uId` = ?";
    const values = [
        req.body.uid,
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.category,
        userInfo.id
    ];
    db.query(q,[...values,postId,userInfo.id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(result);
    });
};