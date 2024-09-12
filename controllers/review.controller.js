import ApiResponse from "../helpers/ApiResponse.js";
import CatchAsyncError from "../middlewares/CatchAsyncError.js";
import Review from "../models/review.models.js";
import User from "../models/user.models.js";

export const assignReview = CatchAsyncError(async (req, res, next) => {
  if (req.isAuthenticated()) {
    const [reviewer, recipient] = await Promise.all([
      await User.findById(req.params.id),
      await User.findById(req.user.id),
    ]);

    const alreadyAssigned = reviewer.assignedReviews.filter(
      (userId) => userId == recipient.id
    );

    if (alreadyAssigned.length > 0)
      return new ApiResponse(res, false, 400, "Review already assigned");

    await reviewer.updateOne({
      $push: { assignedReviews: recipient },
    });

    return new ApiResponse(res, false, 200, "Review assigned");
  } else {
    return res.redirect("/");
  }
});

export const submitReview = CatchAsyncError(async (req, res, next) => {
  if (req.isAuthenticated()) {
    const { recipient_email, feedback } = req.body;
    if (!feedback)
      return new ApiResponse(res, false, 400, "Feedback is required");
    const trimmedFeedback = feedback.trim();

    const [recipient, reviewer] = await Promise.all([
      User.findOne({ email: recipient_email }),
      User.findById(req.params.id),
    ]);

    // Create the new review
    const review = await Review.create({
      review: trimmedFeedback,
      reviewer,
      recipient,
    });

    await Promise.all([
      recipient.updateOne({ $addToSet: { reviewsFromOthers: review } }),
      reviewer.updateOne({ $pull: { assignedReviews: recipient.id } }),
    ]);
    return new ApiResponse(
      res,
      true,
      200,
      "Review submitted successfully!",
      { review },
      "/"
    );
  } else {
    return res.redirect("/");
  }
});

export const updateReview = CatchAsyncError(async (req, res, next) => {
  const { feedback } = req.body;
  const review = await Review.findByIdAndUpdate(
    req.params.id,
    { $set: { review: feedback } },
    { new: true, upsert: true }
  );

  if (!review) return new ApiResponse(req, false, 400, "Review not found");

  return new ApiResponse(req, true, 200, "Review updated");
});
