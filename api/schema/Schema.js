import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("review", reviewSchema);
