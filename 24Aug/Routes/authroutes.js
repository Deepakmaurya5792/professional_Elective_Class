import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/usermodel.js";
import authenticate from "../middleware/auth.js";
import  reguser from "../controller/Authcontroller.js"
import  userlogin from "../controller/login.js"
const router = express.Router();

router.post("/register",reguser)

router.post("/login",userlogin)

export default router;