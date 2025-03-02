import express from "express"
import userSignRoute from "./routes/userRoutes";
const app = express();

app.use("/user" , userSignRoute)
app.listen(3000, () =>{
    console.log("running ji")
})