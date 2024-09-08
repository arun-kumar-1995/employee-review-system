import express from "express";
const router = express.Router();

import { create, signIn, signUp } from "../controllers/user.controller.js";
router.route("/").get(signIn);
router.route("/sign-up").get(signUp);

router.route("/create").post(create);

export default router;
