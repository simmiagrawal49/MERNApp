import express from "express";
import {
  newsletterSubcriptions,
  getNewsletterSubcriptions,
} from "../controllers/newsletterSubcriptionsController.js";

const router = express.Router();

router.route("/").post(newsletterSubcriptions).get(getNewsletterSubcriptions);

export default router;
