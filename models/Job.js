const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 200,
    },
    status: {
      type: String,
      enum: {
        values: ["interview", "declined", "pending"],
        message: "{VALUE} is not supported.",
      },
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user id."],
    },
    jobType: {
      type: String,
      enum: {
        values: ["full-time", "part-time", "contract", "remote", "internship"],
        message: "{VALUE} is not supported.",
      },
      default: "full-time",
    },
    jobLocation: {
      type: String,
      required: [true, "Please provide job location"],
      maxlength: 200,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
