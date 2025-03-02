import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client', // Reference to the client for whom the project is being done
      required: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    videoRequirements: {
      resolution: {
        type: String,
        enum: ['720p', '1080p', '4K'],
        default: '1080p',
      },
      format: {
        type: String,
        enum: ['MP4', 'MOV', 'AVI', 'WMV'],
        default: 'MP4',
      },
      frameRate: {
        type: Number,
        default: 30, // Default to 30 FPS
      },
    },
    Video: {
      type: String, // URL of the final approved video
      required: false,
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Under Review', 'Completed', 'On Hold'],
      default: 'Pending',
    },
    payment: {
      amount: { type: Number, required: true },
      currency: { type: String, default: 'USD' },
      status: {
        type: String,
        enum: ['Pending', 'Paid', 'Overdue'],
        default: 'Pending',
      },
      invoiceUrl: { type: String, required: false }, // Link to invoice if applicable
    },
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

let Project = mongoose.model('Project', ProjectSchema);
export default Project