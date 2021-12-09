import express from "express";
import { fetchAllblogs,fetchCustomBlog } from "../controllers/post.js";
import { signin,signup } from "../controllers/user.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/blogs", fetchAllblogs);
router.get("/blogs/:id", fetchCustomBlog);
export default router;