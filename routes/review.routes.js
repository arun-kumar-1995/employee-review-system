import express from "express";
const router = express.Router();

// define review routes

router.route("/assign-review/:id").post(assignReview);
router.route("/create/:id").post(submitReview);
router.route("/update-review/:id").post(updateReview);

export default router;
