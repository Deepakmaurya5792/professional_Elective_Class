import express from "express"
import mongoose from "mongoose"
const app=express()
const port=3000



mongoose.connect("mongodb+srv://deepakmaurya7sep2005_db_user:Deepak2006@cluster0.8jfc0lw.mongodb.net/")
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Error:", err);
    });

app.get("/",()=>{
    console.log("Contact page")
})



app.listen(port,()=>{
    console.log("Server is running")
})