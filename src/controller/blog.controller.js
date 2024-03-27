import express from "express";
import BlogPost from "../Schema/blog.js";
import Cloudinary from "../middleware/cloudinary/cloudinary.js";



const postBlog = async (req, res) => {
  try {
    const result = await Cloudinary.uploader.upload(req.file.path);
    const { headline, title, author, slug, content } = req.body;
    const newBlogPost = new BlogPost({
      headline,
      title,
      author,
      slug,
      content,
      image: result.secure_url,
    });
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const getBlog = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().sort({ _id: 1 });
    res.json(blogPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
      const contentBySlug = await BlogPost.findOne({ slug: slug });
      if (!contentBySlug) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.json(contentBySlug);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'content not found' });
    }
 };
 




const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  try {
    const { headline, title, slug, author, content } =
      req.body;
    const result = await Cloudinary.uploader.upload(req.file.path);
    const updateBlog = await BlogPost.findByIdAndUpdate(
      id,
      {
        headline: headline,
        title: title,
        author: author,
        slug: slug,
        content: content,
        image: result.secure_url,
      },
      { new: true }
    );
    if (!updateBlog) {
      return res.status(404).json({ message: "blog entry not found" });
    }
    const updatedBlogPost = await updateBlog.save();

    res.json(updatedBlogPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogPost.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "blog  not found" });
    }
    await blog.findByIdAndDelete(id);

    res.status(200).json({
      message: "blog deleted successfully",
      blog,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export {postBlog,deleteBlog,getBlog,updateBlogPost,getBySlug}