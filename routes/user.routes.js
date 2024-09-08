import express from "express";
const router = express.Router();

import { signIn, signUp } from "../controllers/user.controller.js";
router.route("/").get(signIn);
router.route("/sign-up").get(signUp);

export default router;
