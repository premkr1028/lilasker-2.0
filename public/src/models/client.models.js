import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    socialName: {
      type: String,
      required: false,
      trim: true,
    },
    link: {
      type: String,
      required: false,
      trim: true,
    },
    address: {
      street: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
      zip: { type: String, required: false },
      country: { type: String, required: false },
    },
    paidMoney :{
       type:Number,
       default:0,
    },
    dueMoney :{
      type:Number,
      default:0,
   },
   lifetimeMoney :{
       type:Number,
       default:0,
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project', // Reference to video editing projects
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

let Client = mongoose.model('Client', ClientSchema);
export default Client