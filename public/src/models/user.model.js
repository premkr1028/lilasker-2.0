import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    clients: [{
        type: Schema.Types.ObjectId,
        ref: "Client"
    }],
   

})

let user_schema = mongoose.model("user", userSchema)
export default user_schema