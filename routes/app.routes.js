import express from "express";
const router = express.Router();

import { initialTest } from "../controllers/app.controller.js";
router.route("/").get(initialTest);

export default router;
