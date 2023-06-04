import express from "express";
import userRoutes from "./User/user.routes.js";
import postRoutes from "./Post/post.routes.js";

const router = express.Router();

router.use('/api/user/', userRoutes);
router.use('/api/post/', postRoutes);

export default router;
