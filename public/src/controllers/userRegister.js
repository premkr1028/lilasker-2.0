import user_schema from "../models/user.js";
import registerRoute from "../routes/user.js";

const signUp = async (req,res) =>{
    let { userName, email, password } = req.body;
    const isUserExist = await user_schema.findOne({email})
    if(isUserExist){
        return res.status(200).send("user already exist")
    }
    let userData = await user_schema.create({
        userName,
        email,
        password

    })
    console.log(userData)
    if (!userData) {
        return res.status(400).send({ message: "failed" })
    }
    res.status(200).send("Account created")
}

const signIn = async (req, res) => {
    const { email, password } = req.body;
    let userData = await user_schema.findOne({email})
    if(!userData){
        return res.json({"err" : "id not found"})
    }
        if(userData.password =! password){
            return res.status(400).json({"message":"Invalid Password"})
        }        
        res.status(200).json({
            message:"success",
            id:userData._id
        })                  
     
    }

    
export default [signUp, signIn]