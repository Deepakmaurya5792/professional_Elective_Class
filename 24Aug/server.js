import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./Routes/authroutes.js";
import studentsRoutes from "./Routes/studentsRoutes.js";
import teacherRoutes from "./Routes/teacherRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import connectDB from "./db/db.js";
dotenv.config();

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/students", studentsRoutes);
// app.use("/clubs", clubRoutes);
app.use("/teachers", teacherRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
