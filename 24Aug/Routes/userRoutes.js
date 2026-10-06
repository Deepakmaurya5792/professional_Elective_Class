import express from "express";
import bcrypt from "bcrypt";
import User from "../models/usermodel.js";

const router = express.Router();

router.get("/", (req, res) => {
    const token = req.cookies;
    if (!token) {
        return res.status(400).json({ message: "Tokens not found, user not logged in" });
    }
    res.status(200).json({ message: "User route" });
});

router.post("/createuser", async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Please fill the details" });
    }
    try {
        const pass = await bcrypt.hash(password, 10);
        const newuser = await User.create({ name: username, email: email, password: pass });
        if (!newuser) return res.status(400).json({ message: "Something went wrong" });
        res.status(200).json({ message: "User created Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/login", async (req, res) => {
    res.json({ message: "Login route" });
});

export default router;