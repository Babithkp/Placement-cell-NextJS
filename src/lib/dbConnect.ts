import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://babithkullachetti44:babith@learn-nextjs.5haci8o.mongodb.net/placement-cell?retryWrites=true&w=majority';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};