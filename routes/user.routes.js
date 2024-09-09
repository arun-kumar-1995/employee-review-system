import express from "express";
const router = express.Router();
import checkAuth from "../middlewares/Auth.js";

import {
  create,
  signIn,
  signUp,
  createSession,
} from "../controllers/user.controller.js";

router.route("/create").post(create);
router.route("/create-session").post(createSession);

router.route("/").get(signIn);
router.route("/sign-up").get(signUp);

export default router;
