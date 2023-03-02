import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    email: { type: String, required: true, nullable: false, trim: true },
    name: { type: String, trim: true },
    message: { type: String, required: true, nullable: false, trim: true },
    phone: { type: String, trim: true },
    read: { type: Boolean, default: false },
    responded: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

export const MessageForm =
  mongoose.models.message || mongoose.model("message", MessageSchema);
