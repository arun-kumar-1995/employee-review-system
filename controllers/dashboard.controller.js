import CatchAsyncError from "../middlewares/CatchAsyncError.js";
import Review from "../models/review.models.js";
import User from "../models/user.models.js";

export const adminDashboard = CatchAsyncError(async (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.role === "admin") {
      // get all users
      let users = await User.find({ role: "employee" });
      return res.render("adminDashboard", {
        title: "Admin Dashboard",
        users,
      });
    } else {
      return res.redirect("back");
    }
  } else {
    return res.redirect("/");
  }
});

export const employeeDashboard = CatchAsyncError(async (req, res, next) => {
  if (req.isAuthenticated()) {
    // populate the employee with reviews assigned to it and reviews from others
    const employee = await User.findById(req.params.id)
      .populate({
        path: "reviewsFromOthers",
        populate: {
          path: "reviewer",
          model: "User",
        },
      })
      .populate("assignedReviews");

    // extract the reviews assigned to it
    const assignedReviews = employee.assignedReviews;

    // extract feedbacks from other employees
    const reviewsFromOthers = employee.reviewsFromOthers;

    // populate reviews given from others
    const populatedResult = await Review.find().populate({
      path: "reviewer",
      model: "User",
    });

    return res.render("employeeDashboard", {
      title: "Employee Dashboard",
      employee,
      assignedReviews,
      reviewsFromOthers,
    });
  } else {
    res.redirect("/");
  }
});
