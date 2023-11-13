import express from "express";
import { createCourse, generateVideoUrl } from "../controllers/course.controller";
import { authorizeRole, isAuthenticated } from "../middleware/isAuth";

const router = express.Router();

router.post('/create-coures',isAuthenticated,authorizeRole("admin"),createCourse)

router.post('/generateVideoUrl',generateVideoUrl)

export default router