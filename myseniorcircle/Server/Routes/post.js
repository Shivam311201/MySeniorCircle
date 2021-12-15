import express from "express";
import { fetchAllblogs,fetchCustomBlog,LikeCustomBlog,deleteCustomBlog, DislikeCustomBlog } from "../controllers/post.js";
const router = express.Router();
router.get("/blogs", fetchAllblogs);
router.get("/blogs/:id", fetchCustomBlog);
router.patch("/blogs/like/:id", LikeCustomBlog);
router.patch("/blogs/dislike/:id", DislikeCustomBlog);
router.delete("/blogs/:id", deleteCustomBlog);
export default router;