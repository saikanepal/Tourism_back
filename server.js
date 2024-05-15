require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//IMPORT ROUTES HERE
const sampleRoute = require('./Routes/Sample-Routes');
const ReviewRouter = require('./Routes/ReviewRoutes');
const AdminRouter = require('./Routes/adminRoutes');
const BookingRouter = require('./Routes/BookingRoutes');


//Server configuratiion
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log('MongoDB connected successfully');
        // Start the server only when MongoDB connection is successful
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

//routes here
app.use('/api/review',ReviewRouter);
app.use('/api/admin', AdminRouter);
app.use('/api/booking', BookingRouter);

app.use('/api/sample', sampleRoute); // for a practical project would be more like , /api/user , /api/posts , /api/messages

