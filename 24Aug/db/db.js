import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const PORT = process.env.PORT || 3000;
const app =express()
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log("Database Connected");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Database connection failed:", error);
        
    }
};
export default startServer