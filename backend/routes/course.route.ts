import express from "express";
import { createCourse, editCourse, generateVideoUrl, getSingleCourse } from "../controllers/course.controller";
import { authorizeRole, isAuthenticated } from "../middleware/isAuth";

const router = express.Router();

router.post('/create-coures',isAuthenticated,authorizeRole("admin"),createCourse)
router.put('/edit-coures/:id',isAuthenticated,authorizeRole("admin"),editCourse)
router.get('/get-coures/:id',getSingleCourse)
router.post('/generateVideoUrl',generateVideoUrl)

export default router