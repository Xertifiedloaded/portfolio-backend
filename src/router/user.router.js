import express from "express";
import { Landing } from "../controller/landing.js";
// import upload from "../middleware/multer/multer.js";
import createPortfolioEntry from "../controller/portfolio.js";
import { getAllPortfolioEntries } from "../controller/getall.controller.js";
import { deletePortfolio, editPortfolioEntry } from "../controller/editPortfolio.js";
import { submitContactForm } from "../controller/email.controller.js";
import { deleteBlog, getBlog, getBySlug, postBlog, updateBlogPost } from "../controller/blog.controller.js";
import multer from "multer";
const storage = multer.diskStorage({});
const upload = multer({ storage });


const router = express.Router();
router.get("/get", getAllPortfolioEntries);
router.get("/", Landing);
router.post("/email", submitContactForm);
router.post("/post", upload.single("image"), createPortfolioEntry);
router.patch("/edit/:id", upload.single("image"), editPortfolioEntry);
router.post("/blog", upload.single("image"), postBlog);
router.get("/blog", getBlog);
router.get("/blog/:slug", getBySlug);
router.patch("/blog/:id", upload.single("image"), updateBlogPost);
router.delete("/blog/:id", deleteBlog);
router.delete("/delete/:id", deletePortfolio);
export default router;
