import express from "express";
import { fetchAllblogs,fetchCustomBlog,LikeCustomBlog,deleteCustomBlog } from "../controllers/post.js";
import auth from "../middleware/auth.js";
const router = express.Router();
router.get("/blogs", fetchAllblogs);
router.get("/blogs/:id", fetchCustomBlog);
router.patch("/blogs/like/:id",auth,LikeCustomBlog);
router.delete("/blogs/:id", deleteCustomBlog);
export default router;