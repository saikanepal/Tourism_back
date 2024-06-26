require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//IMPORT ROUTES HERE
const sampleRoute = require("./Routes/Sample-Routes");
const ReviewRouter = require("./Routes/ReviewRoutes");
const AdminRouter = require("./Routes/adminRoutes");
const BookingRouter = require("./Routes/BookingRoutes");
const ImageRouter = require("./Routes/ImageRoute");
const GalleryRouter = require("./Routes/galleryRoutes");
const priceUpdateRoutes = require("./Routes/priceRoute");
//Server configuratiion
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// MongoDB connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected successfully");
    // Start the server only when MongoDB connection is successful
    app.listen(8000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// mongoose
//   .connect("mongodb://127.0.0.1:27017/trekking")
//   .then(() => {
//     console.log("MongoDB connected successfully");
//     // Start the server only when MongoDB connection is successful
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });

//routes here
app.use("/api/review", ReviewRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/image", ImageRouter);
app.use("/api/gallery", GalleryRouter);

app.use("/api/price", priceUpdateRoutes);

app.use("/api/sample", sampleRoute); // for a practical project would be more like , /api/user , /api/posts , /api/messages
