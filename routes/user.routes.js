import express from "express";
const router = express.Router();

import {
  create,
  signIn,
  signUp,
  createSession,
} from "../controllers/user.controller.js";
router.route("/").get(signIn);
router.route("/sign-up").get(signUp);

router.route("/create").post(create);
router.route("/create-session").post(createSession);

export default router;
