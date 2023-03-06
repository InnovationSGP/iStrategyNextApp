import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    resource: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    header: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    published: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const Blogs =
  mongoose.models.blogs || mongoose.model("blogs", BlogSchema);
