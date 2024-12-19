import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './dbConnection/connectDb.js';
import ProjectRoutes from './routes/projectRoutes.js';
import AuthRoutes from './routes/authRoutes.js';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/portfolio';

// Connect to the database
connectDB(DATABASE_URL);

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON data

// Serve static files (images)
app.use("/uploads", express.static("uploads"));

// API Routes
app.use('/api/projects', ProjectRoutes);
app.use('/api/auths', AuthRoutes); // Handle authentication routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on https://localhost:${PORT}`);
});
