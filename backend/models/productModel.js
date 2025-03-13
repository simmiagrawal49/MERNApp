import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//name : product Name
//image : product Image
//productViews : array of other images of the same product
//productType : [Original Painting, Art Canvas ,Art Print ,Books,Calendar,Class,Digital Downloads,Fine art,Gift Card,Phone & Tablet Cases (15)]
//productCollection : the stories or theme categorised the paintings
//category :
//description :
//reviews :
//rating :
//numReviews :
//price : the price of the product
//countInStock : quantity
//size :
//frame :
//details :
//instructions : handling instructions
//aboutThisPiece : story behind the Piece
//paintedOnDate : final date when the original painting/product was completed

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    productViews: {
      type: Array,
      required: false,
    },
    productType: {
      type: String,
      required: true,
    },
    productCollection: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    size: {
      type: Array,
      required: false,
    },
    frame: {
      type: Array,
      required: false,
    },
    details: {
      type: String,
      required: false,
    },
    instructions: {
      type: String,
      required: false,
    },
    aboutThisPiece: {
      type: String,
      required: false,
    },
    paintedOnDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
