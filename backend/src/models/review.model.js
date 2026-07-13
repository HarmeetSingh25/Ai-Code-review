import mongoose, { Schema } from "mongoose";

const reviewschemas = Schema({
  language: "javascript",
  code: "const a=10",
});

const ReviewModel= mongoose.model("reviewschemas" , reviewschemas)
export default ReviewModel