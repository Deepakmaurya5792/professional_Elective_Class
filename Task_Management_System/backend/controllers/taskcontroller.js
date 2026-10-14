const task = require("../Models/TaskSchema");

const getTasks = async (req, res) => {
    try {
        const data = await task.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch todos" });
    }
};


const createTask = async (req, res) => {
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
};

const deleteTask = async (req, res) => {
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
};

module.exports = { getTasks, createTask, deleteTask };