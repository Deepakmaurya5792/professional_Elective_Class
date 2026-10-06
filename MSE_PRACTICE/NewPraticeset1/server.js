    const express=require("express")
    const pollsdetail=require("./Routes/communityRoutes.js")
    const productdetail=require("./Routes/productRoutes.js")
    const eventsdetail=require("./Routes/registrationRoute.js")
    const linkvoultdetail=require("./Routes/linkvoult.js")
    const port=3000
    const app=express()
    app.use(express.json())
    app.use("/api",pollsdetail)
    app.use("/api", productdetail);
    app.use("/api",eventsdetail);
    app.use("/api",linkvoultdetail);
    app.listen(port,()=>{
        console.log("Server is running");
    })