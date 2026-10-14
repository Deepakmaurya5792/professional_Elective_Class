const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    },
    { timestamps: true }
);

const task = mongoose.model("task", taskSchema);
module.exports = task;
