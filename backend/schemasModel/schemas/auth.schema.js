import { Schema } from "mongoose";

const authSchema = Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default authSchema;
