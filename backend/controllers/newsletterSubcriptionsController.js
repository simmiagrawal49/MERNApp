import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from "../utils/generateToken.js";
import NewsletterSubcriptions from "../models/newsletterSubscriptionsModel.js";

// @desc    subscription list for newsletter
// @route   POST /api/newsletterSubcriptions
// @access  Public
const newsletterSubcriptions = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const subscriptionExists = await NewsletterSubcriptions.findOne({ email });

  if (subscriptionExists) {
    res.status(400);
    throw new Error("Already subscribed for Newsletter");
  }

  const subscription = await NewsletterSubcriptions.create({
    email,
  });

  if (subscription) {
    generateToken(res, subscription._id);

    res.status(201).json({
      _id: subscription._id,
      email: subscription.email,
      isRegisteredUser: subscription.isRegisteredUser,
    });
  } else {
    res.status(400);
    throw new Error("Invalid subscription data");
  }
});

// @desc    Fetch all subscriptions
// @route   GET /api/newsletterSubcriptions
// @access  Public
const getNewsletterSubcriptions = asyncHandler(async (req, res) => {
  const newsletterSubcriptions = await NewsletterSubcriptions.find({});
  res.json(newsletterSubcriptions);
});

export { newsletterSubcriptions, getNewsletterSubcriptions };
