const express = require("express");
const router = express.Router();

const { getTasks, createTask, deleteTask } = require("../controllers/taskcontroller");
const { createUser } = require("../controllers/usercontroller");


router.get("/", (req, res) => {
    res.send("Homepage");
});

router.get("/todos", getTasks);
router.post("/todos/create", createTask);
router.delete("/todos/:id", deleteTask);

router.post("/todos/user", createUser);

module.exports = router;
