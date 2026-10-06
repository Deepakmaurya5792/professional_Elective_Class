import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

const authenticate = async (req, res, next) => {
    
        const{token}=req.cookies.token
        if(!token)
            res.status(400).json({
        message:"Unauthorized person"})
next();
            }
    
export default authenticate;