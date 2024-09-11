import CatchAsyncError from "../middlewares/CatchAsyncError.js";
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
  return res.render("employeeDashboard", {
    title: "Employee Dashboard",
  });
});
