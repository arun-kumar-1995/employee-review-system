const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    review: {
      type: String,
    },
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", schema);

export default Review;
