import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: Date,
      default: Date.now,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
