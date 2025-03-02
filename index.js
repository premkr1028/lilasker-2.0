import express from "express"
import dotenv from "dotenv";
import userSignRoute from "./public/src/routes/userRoutes.js";
const app = express();
dotenv.config()
app.use("/user" , userSignRoute)
app.get("/",(req, res)=>{
res.send("megha")
})
app.listen(process.env.PORT, () =>{
    console.log("running ji" , process.env.PORT)
})