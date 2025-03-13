import asyncHandler from "../middleware/asyncHandler.js";
import shortid from "shortid";
import Razorpay from "razorpay";

// @desc    subscription list for newsletter
// @route   POST /api/newsletterSubcriptions
// @access  Public

const razorPay = asyncHandler(async (req, res) => {
  const { totalPrice } = req.body;
  const payment_capture = 1;
  const amount = totalPrice;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  const razorpay = new Razorpay({
    key_id: "rzp_test_mbXI4lPl103mE9",
    key_secret: "9nZUHKRqCaVgU2qsaKdgBcXV",
  });

  try {
    const response = await razorpay.orders.create(options);
    res.status(201).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Invalid totalPrice");
  }
});

export { razorPay};
