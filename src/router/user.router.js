import express from "express";
import { Landing } from "../controller/landing.js";
import upload from "../middleware/multer/multer.js";
import createPortfolioEntry from "../controller/portfolio.js";
import { getAllPortfolioEntries } from "../controller/getall.controller.js";
import { deletePortfolio, editPortfolio } from "../controller/editPortfolio.js";
import { submitContactForm } from "../controller/email.controller.js";

const router = express.Router();
router.get("/get",  getAllPortfolioEntries);
router.get("/", Landing);
router.post("/email", submitContactForm);
router.post("/post", upload.single("image"), createPortfolioEntry);
router.patch('/edit/:id', editPortfolio);
router.delete('/delete/:id', deletePortfolio);
export default router;
