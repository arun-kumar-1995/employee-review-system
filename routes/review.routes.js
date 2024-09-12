import express from "express";
const router = express.Router();
import {
  assignReview,
  submitReview,
  updateReview,
} from "../controllers/review.controller.js";

// define review routes

router.route("/assign-review/:id").post(assignReview);
router.route("/create/:id").post(submitReview);
router.route("/update-review/:id").post(updateReview);

export default router;
