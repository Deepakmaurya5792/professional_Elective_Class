import express from "express"
import dotenv from "dotenv" 
dotenv.config()
const PORT=process.env.PORT||5000
const app=express()
app.use(express.json())
const students=[
   { 
    id:1,
    name:"Deepak",
    age:20,
    course:"DSTL"
   },
   {
    id:2,
    name:"Aryan",
    age:201,
    course:"DS"
   }
]
 app.use((req,res,next)=>{
    console.log("Hello i am the middle ware");
    next();
 })
 
app.get("/",(req,res)=>{
    res.json(students);
})

app.post("/Create",(req,res)=>{
 const newstudent={
    id:students.length+1,
    name:req.body.name,
    age:req.body.age,
    course:req.body.course
 }
 students.push(newstudent)
 return res.status(201).json({
    message:"Student added ",
    students:students//ye sirf ham likte h response me dikane ke liye new studemt ko
})
})


app.put("/update/:id",(req,res)=>{
const id= parseInt(req.params.id);
const student=students.find(s=>s.id===id);
if(!student){
     return res.status(404).json({
        message:"Student not found"
    })
}
student.name=req.body.name;
student.age=req.body.age;
student.course=req.body.course;
   return res.status(201).json({
    message:"Student detail updated successfully",
    student :student
 });


});


 app.patch("/updateone/:id",(req,res)=>{
 const id=parseInt(req.params.id);
 const student=students.find(s=>s.id===id);
 if(!student){
    return res.status(400).json({
        message:"Student detail not found"
    })
 }
 if(req.body.name!==undefined){
 student.name=req.body.name;
 }
 if(req.body.course!==undefined){
 student.course=req.body.course;
 }
 res.status(201).json({
    message:"Student detail upadted successfully",
    student:student
 })
 })


 app.delete("/delete/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=students.findIndex(s=>s.id===id);
    if(index===-1){
       return  res.status(404).json({
            message:"Student not found"
        })
    }
    students.splice(index,1);
    return res.status(201).json({
        message:"Student deleted",
        studenst:students
    })
 })






app.listen(PORT,()=>{
    console.log("Server is Running");
})