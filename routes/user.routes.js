import express from "express";
const router = express.Router();
import checkAuth from "../middlewares/Auth.js";

import {
  create,
  signIn,
  signUp,
  createSession,
  addEmployee,
} from "../controllers/user.controller.js";
import {
  adminDashboard,
  employeeDashboard,
} from "../controllers/dashboard.controller.js";

router.route("/create").post(create);
router.route("/create-session").post(createSession);

router.route("/").get(signIn);
router.route("/sign-up").get(signUp);
router.route("/admin-dashboard").get(adminDashboard);
router.route("/employee-dashboard/:id").get(employeeDashboard);
router.route("/add-employee").get(addEmployee);

export default router;
