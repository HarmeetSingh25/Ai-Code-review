import { Router } from "express";
import { CodeReview } from "../controllers /review.contoller.js";

const ReviewRouter= Router()

ReviewRouter.post("/review" , CodeReview)
export default ReviewRouter