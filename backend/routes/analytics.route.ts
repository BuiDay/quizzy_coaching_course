import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/isAuth";
import { getCoursesAnalytics, getMailAnalytics, getOrderAnalytics, getUserAnalytics } from "../controllers/analytics.controller";

const router = express.Router();

router.get('/user-analytic',isAuthenticated,authorizeRole("admin"),getUserAnalytics)
router.get('/mail-analytic',isAuthenticated,authorizeRole("admin"),getMailAnalytics)
router.get('/course-analytic',isAuthenticated,authorizeRole("admin"),getCoursesAnalytics)
router.get('/order-analytic',isAuthenticated,authorizeRole("admin"),getOrderAnalytics)
export default router