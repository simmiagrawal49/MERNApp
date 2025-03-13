import express from "express";
import { razorPay } from "../controllers/razorPayController.js";

const router = express.Router();

router.route("/").post(razorPay);

export default router;
