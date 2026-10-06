const express=require("express")
const router=express.Router()
const links=[];

router.post("/shorten",(req,res)=>{
    
    const{username, originalUrl}=req.body;
    if(username===undefined || originalUrl===undefined)
        return res.status(400).json({
            message:"username and originalUrl are required"
        })
    try{
        new URL(originalUrl);


    }
    catch(error){
        return res.status(400).json({
            message:"invalid url"
        })
    }





   





    let code;
    do{
        code=Math.random().toString(36).substring(2,8);

    }while(links.some(link=>link.code===code));
    const newlinks={
        code:code,
        username:username,
        originalUrl:originalUrl
    };
    links.push(newlinks);
    return res.status(200).json({
        message:"url shorten successfully",
        code:code
    })
})


router.get("/url/:code",(req,res)=>{
    const code=req.params.code;
    const link=links.find(link=>link.code===code);
    if(!link){
        return res.status(404).json({
            message:"Link not found"

        })
    }
        return res.status(202).json({
             originalUrl: link.originalUrl,
        username: link.username
        })
    
})
router.get("/users/:username/urls",(req,res)=>{
    const username=req.params.username
    const userlink=links.filter(link=>link.username===username)
    return res.status(202).json({
        usrname:username,
        link:userlink

    })
})  


 router.delete("/url/:code",(req,res)=>{
    const code=req.params.code;
    const index=links.findIndex(link=>link.code===code);
    if(index==-1)
        return res.status(404).json({
    message:"url not found"
})
links.splice(index,1);
return res.status(202).json({
    message:"code deleted successfully"
})
 })
module.exports=router