import express from "express"
import dotenv from "dotenv";
import userSignRoute from "./routes/userRoutes.js";
dotenv.config();
const app = express();

app.use("/user" , userSignRoute)
app.listen(process.env.PORT, () =>{
    console.log("running ji")
})