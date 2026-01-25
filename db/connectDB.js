import mongoose from "mongoose";

const connectDB = async () => {
    try {
      if (mongoose.connection.readyState >= 1) {
        console.log("MongoDB already connected")
        return;
      }
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
    }
  }

export default connectDB;