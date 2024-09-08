import express from 'express';
const router = express.Router();
import user_route from "./user.routes.js"
import review_route from "./review.routes.js"

router.use("/" , user_route);
router.use("/review" , review_route);


export default router;

