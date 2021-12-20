import express from "express";
import { signin,signup,updateUser,getUser } from "../controllers/user.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.patch('/user/updateDetails', updateUser);
router.get('/user/getDetails/:id', getUser);
export default router;