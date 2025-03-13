import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import newsletterSubscriptionsRoutes from "./routes/newsletterSubscriptionsRoutes.js";
import razorPayRoutes from "./routes/razorPayRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";

const port = 8000;
const app = express();

connectDB();

app.use(cors());

//when we tried to console req body, it showed undefined so we need middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//to get the cookie from req body
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/newsletterSubcriptions", newsletterSubscriptionsRoutes);
app.use("/api/razorPay", razorPayRoutes);

// if (process.env.NODE_ENV === 'production') {
//   const __dirname = path.resolve();
//   app.use('/uploads', express.static('/var/data/uploads'));
//   app.use(express.static(path.join(__dirname, '/frontend/build')));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   );
// } else {
//   const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//   app.get('/', (req, res) => {
//     res.send('API is running....');
//   });
// }

const __dirname = path.resolve();
//in ec2 error came here at the formation of build path it was coming as MERNApp/backend/frontend/index.html
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in production mode on port ${port}`)
);
