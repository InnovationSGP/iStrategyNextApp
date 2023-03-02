import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, nullable: false, trim: true },
  email: { type: String, required: true, nullable: false, trim: true },
  password: { type: String, required: true, nullable: false, trim: true },
  admin: {
    type: Boolean,
    required: true,
    nullable: false,
    trim: true,
    default: false,
  },
});

export const User = mongoose.models.user || mongoose.model("user", userSchema);
