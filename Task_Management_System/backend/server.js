require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectdb = require("./Db/db");
const task = require("./Models/model");
const user = require("./Models/user");

const app = express();

app.use(cors());
app.use(express.json());

connectdb();

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.get("/todos", async (req, res) => {
    try {
        const data = await task.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch todos" });
    }
});

app.post("/todos/create", async (req, res) => {
    try {
        const { title } = req.body;

        if (!title || !title.trim()) {
            return res.status(400).json({
                message: "Todo title is required",
            });
        }

        await task.create({ title: title.trim() });

        res.status(201).json({
             message: "Task added successfully"
             });
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});


app.delete("/todos/:id", async (req, res) => {
    try {
        const todoId = req.params.id;

        const deleted = await task.findByIdAndDelete(todoId);

        if (!deleted) {
            return res.status(404).json({
                 message: "Todo not found" 
                });
        }

        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ 
            message: "Failed to delete todo" 
        });
    }
});

app.post("/todos/user",async(req,res)=>{
    try{
    const {name,email}=req.body;
    if(!name || !email){
        return res.status(400).json({message:"Email and name are required"})
    }
     const newuser=await user.create({name:name,email:email})
     return res.status(200).json({
        message:"User Cretaed succesfully",
        user:newuser
     })
    }
    catch(error){
        console.log("Error",error)
    }
})
app.listen(5000, () => {
    console.log("Server running");
});
