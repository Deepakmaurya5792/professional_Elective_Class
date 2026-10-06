import express from "express"
const app = express();

const port = 5000;

app.use(express.json())
// app.get("/",(req,res)=>{
//     res.json({message : "Home page"})
// })
// app.use((req,res,next)=>{
//     console.log('Middleware 1');
//     next()
// })
// app.use((req,res,next)=>{
//     console.log('Middleware 2');
//     next()
// })

// //mount on path

// app.use('/student/:id',(req,res,next)=>{
//     console.log("Response type",req.method);
//    next()
    
// })
// app.get('student/:id',
//     (req,res,next)=>{
//         if(req.params.id==0)
//             next('route')
//             else
//                 next()
        
//     }
// )

// app.use('/user/:id',
//     (req,res,next)=>{
//         console.log('Requested  Url',req.url);
//         next()  
// },
// (req,res,next)=>{
//         console.log('Requested  type',req.method);
        
// })




// app.use((err ,req,res,next)=>{
// console.log(err.stack)

// res.status().send()
// })




//  app.post('/user',(req,res)=>{
    
//  })



app.use((req,res,next)=>{
    console.log("REquest Url",req.originalUrl);
    console.log("REquest method",req.method);
    console.log("REques");
    next()
})


app.listen(port,()=>{
    console.log("Server has started at port",port);
    
})









import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import studentsRoutes from "./Routes/studentsRoutes.js"
import teacherRoutes from "./Routes/teacherRoutes.js"
const app = express()
const port = process.env.PORT||3000
app.use('/students',studentsRoutes)
app.use('/teachers',teacherRoutes)
dotenv.config()
mongoose.connect(process.env.MONGODB_URL)
.then (()=>{
    console.log("database Connected")
})
.catch((err)=>{
    console.log("Error",err)
})


const route=router()
let students=[
    {
        id:1,
        name:"Deepak",
        age:23,
        course:"Btech"
    },
      {
        id:2,
        name:"Aryan",
        age:23,
        course:"MCA"
    },
       {
        id:3,
        name:"Arpit",
        age:23,
        course:"Bpharma"
    }
]

route.get("/",(req,res)=>{
    res.json(students);
})




route.get("/students/:id",(req,res)=>{
 const id=parseInt((req.params.id))

 const s=students.find(s=>s.id===id)
 if(!s){
    return res.status(404).json({
        message:"Student not found"
    })

 }
 res.json(s)
  })




 route.post('/students',(req,res)=>{
    const Newstudents={
        id : students.length+1,
        name :req.body.name,
        age:req.body.age,
        course:req.body.course
    }
    students.push(Newstudents)
    return res.status(201).json({
        message:"Student Added"
    })
 })




route.delete('/students/delete/:id',(req,res)=>{
const id=parseInt((req.params.id))

 const s=students.findIndex(s=>s.id===id)
 
    if(s==-1){
        res.status(404).json({
            message:"Student not found"
        })
    }
    students.splice(s,1)
    return res.status(201).json({
        message:"Student deleted"
        
    })
 })




route.put("/students/update/:id",(req,res)=>{
 const id=parseInt((req.params.id))
 const s=students.find(s=>s.id===id)
 if(!s){
    return res.status(404).json({
        message:"Student not found"
    })

 }
s.name=req.body.name
s.age=req.body.age
s.course=req.body.course
s=students
 return res.status(201).json(students)
  })




route.patch("/students/patch/:id",(req,res)=>{
 const id=parseInt((req.params.id))
 const s=students.find(s=>s.id===id)
 if(!s){
    return res.status(404).json({
        message:"Student not found"
    })
 }
 if(req.body.name!==undefined)
s.name=req.body.name
  if(req.body.name!==undefined)
s.age=req.body.age
   if(req.body.name!==undefined)
s.course=req.body.course
 return res.json(students)
  })



route.get('/search',(req,res)=>{
    const course=req.query.course
    const age=req.query.age
    const s=students.filter(s=>s.course.toLowerCase()==course.toLowerCase()&&s.age==age)
    res.json(students)
})


app.listen(port,()=>{
    console.log("Server is running");
})