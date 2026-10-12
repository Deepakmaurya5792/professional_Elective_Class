
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage
let todos = [];
let id = 1;

// GET: Fetch all todos
app.get("/",(req,res)=>{
  res.se
})
app.get("/todos", (req, res) => {
    res.json(todos);
});

// POST: Add a new todo
app.post("/todos", (req, res) => {
    const { title } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            message: "Todo title is required"
        });
    }

    const todo = {
        id: id++,
        title: title.trim()
    };

    todos.push(todo);

    res.status(201).json(todo);
});

// DELETE: Delete a todo by ID
app.delete("/todos/:id", (req, res) => {
    const todoId = Number(req.params.id);

    const exists = todos.some((todo) => todo.id === todoId);

    if (!exists) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todos = todos.filter((todo) => todo.id !== todoId);

    res.json({
        message: "Todo deleted successfully"
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});








