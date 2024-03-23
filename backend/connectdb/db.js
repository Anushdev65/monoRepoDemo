import mongoose from "mongoose";

import { dbUrl } from "../config/config.js";

export const connectDb = async () => {
  // Disable strict query mode for mongoose
  mongoose.set("strictQuery", false);

  //Configure connection options
  const options = {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new server discovery and monitoring engine
  };

  try {
    await mongoose.connect(dbUrl, options);

    console.log(
      `expressApp is connectd to MongoDB at port ${dbUrl} sucessfully`
    );
  } catch (error) {
    console.log(error.message);
  }
};
