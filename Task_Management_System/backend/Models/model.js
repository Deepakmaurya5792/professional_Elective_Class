const mongoose=require("mongoose")
const taskSchema=new mongoose.Schema({
   title: {
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true}
);
const task=mongoose.model("task",taskSchema)
export default taskSchema

















