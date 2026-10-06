import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/authroutes.js";
import startServer from "./db/db.js";
dotenv.config();

const app = express();


app.use(express.json());
app.use("/auth", authRoutes);
// app.use("/students", studentsRoutes);
// app.use("/clubs", clubRoutes);
// app.use("/teachers", teacherRoutes);
// app.use("/users", userRoutes);
startServer();
app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});
