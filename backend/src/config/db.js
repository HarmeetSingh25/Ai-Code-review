import mongoose from "mongoose";
import config from "./config.js";

export const ConnectToDB = async () => {
  if (!config.MONGODB_URL) {
    console.error("Error: MONGODB_URL is not defined in the configuration.");
  }
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("connect to DB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};
