// // const http=require("http")
// // const port =5000;
// // const server=http.createServer((req,res)=>{
// //     res.end("hello world")
// // })
// // server.listen(port,()=>{
// //     console.log(`Serevr is running on port ${port}`);
// // })


// const http=require("http")
// const port =5000;
// const server=http.createServer((req,res)=>{
//     // if(req.url==="/"&&req.method==="GET")    {
//     //     res.end("You are at the homepage");
//     // }
//     // else if(req.url==="/About"&&req.method==="GET"){
//     //     res.end("Code is about request and reponse");
//     // }
//     // else{
//     //     res.end("invalid request page is not found");
//     // }
//     const x=req.url;
// switch(x){
//     case "/":
     
       
//         return res.end("This is the Homepage ");

//     case "/About":
//         console.log("Code is about request and reponse");

       
//         return res.end("Done1"); 
        
//     case "/Contact":
//         console.log("This is the contact page")
//        return res.end("Done2");
//     default:
//         console.log("Invalid url");
// }
// })
// server.listen(port,()=>{
//     console.log(`Serevr is running on port ${port}`);
// })


// // const  fs=require("fs")
// // const http=require("http")
// // const port =5000;
// // const server=http.createServer((req,res)=>{
// //     fs.appendFile('message.txt', 'data to append', (err) => {
// //   if (err) throw err;
// //   console.log('The "data to append" was appended to file!');
// // });
// // })
// // server.listen(port,()=>{
// //     console.log(`Serevr is running on port ${port}`);
// // })


// const http = require("http");

// const port = 5000;

// const server = http.createServer((req, res) => {
//     const x = req.url;

//     switch (x) {
//         case "/":
//             return res.end("This is the Homepage");

//         case "/About":
//             console.log("Code is about request and response");
//             return res.end("Code is about request and response");

//         case "/Contact":
//             console.log("This is the contact page");
//             return res.end("Done2");

//         default:
//             console.log("Invalid url");
//             return res.end("Invalid URL");
//     }
// });

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


//POST METHOD  DATE-24AUG

const http=require('http')
const port=5000;
const server=http.createServer((req,res)=>{
   // res.end("hello");
    if(req.url==='/' && req.method==="POST"){
        let body=''
        req.on('data',(chunk)=>{
            body=body+chunk
        })
        req.on('end',()=>{
            console.log("raw Data",body);
            console.log("parsed Data",user)
        })
    }
})
server.listen(port,()=>{
    console.log("'server is started");
})