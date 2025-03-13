import mongoose from "mongoose";

const newsletterSubcriptionsSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isRegisteredUser: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const NewsletterSubcriptions = mongoose.model(
  "NewsletterSubcriptions",
  newsletterSubcriptionsSchema
);

export default NewsletterSubcriptions;
