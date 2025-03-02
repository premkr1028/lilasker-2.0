import express, { Router } from "express";
import SignArr from "../controllers/userRegister.js";
let [SignUp, SignIn] = SignArr;
let userSignRoute = express.Router()
userSignRoute.post("/Singup", SignUp)
userSignRoute.post("/login", SignIn)

export default userSignRoute;