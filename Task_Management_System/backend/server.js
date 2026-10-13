
const express = require("express");
const cors = require("cors");
const { default: connectdb } = require("./Db/db");

const app = express();

app.use(cors());
app.use(express.json());

connectdb();

// let todos = [];
// let id = 1;
app.get("/",(req,res)=>{
  res.send("Homepage")
})
app.get("/todos", async(req, res) => {

    const data= await task.find()
   await res.json(todos);
});


app.post("/todos", async(req, res) => {
    try{
    const { title } = req.body;
    

    if (!title || !title.trim()) {
        return res.status(400).json({
            message: "Todo title is required"
        });
    }
     await task.create({
        title:title.trim()
    })
    res.status(200).json({
    message:"task added successfully"
    })
}
catch(error){
 return res.status(400).json({
    message:"Something went wrong"
 })
}
    // const todo = {
    //     id: id++,
    //     title: title.trim()
    // };

    // todos.push(todo);

});

app.delete("/todos/:id", async(req, res) => {
    const todoId = Number(req.params.id);

    const exists = await  task.find((t) => t.id ===todoId);

    if (!exists) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    t = t.filter((t) => t.id !== todoId);

    res.json({
        message: "Todo deleted successfully"
    });
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});








