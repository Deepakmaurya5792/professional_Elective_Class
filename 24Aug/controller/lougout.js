import User from "../models/usermodel.js";

const userlougout=async(req,res)=>{
 const token=req.cookies.token;
 if(!token)
    return res.status(400).json({message:"token not found"})

    return res.clearcookie(token)
}

export default userlougout;