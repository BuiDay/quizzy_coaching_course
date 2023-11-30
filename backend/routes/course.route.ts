import express from "express";
import { addAnswer, addQuestion, createCourse, editCourse, generateVideoUrl, getAllCourse, getCourseByUser, getSingleCourse } from "../controllers/course.controller";
import { authorizeRole, isAuthenticated } from "../middleware/isAuth";

const router = express.Router();

router.post('/create-course',isAuthenticated,authorizeRole("admin"),createCourse)
router.put('/edit-course/:id',isAuthenticated,authorizeRole("admin"),editCourse)
router.get('/get-course/:id',getSingleCourse)
router.get('/get-all-courses',getAllCourse)
router.post('/generateVideoUrl',generateVideoUrl)
router.get('/get-course-content',isAuthenticated,getCourseByUser)
router.put('/add-question',isAuthenticated,addQuestion)
router.put('/add-answer',isAuthenticated,addAnswer)
export default router