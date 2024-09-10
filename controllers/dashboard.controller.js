import CatchAsyncError from "../middlewares/CatchAsyncError.js";

export const adminDashboard = CatchAsyncError(async (req, res, next) => {
  return res.render("adminDashboard", {
    title: "Admin Dashboard",
  });
});

export const employeeDashboard = CatchAsyncError(async (req, res, next) => {
  return res.render("employeeDashboard", {
    title: "Employee Dashboard",
  });
});
