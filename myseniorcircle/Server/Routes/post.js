import express from "express";
import { fetchAllblogs,fetchCustomBlog } from "../controllers/post.js";
const router = express.Router();
router.get("/blogs", fetchAllblogs);
router.get("/blogs/:id", fetchCustomBlog);
export default router;