import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/isAuth";
import { getAllNotifications, updateNotifications } from "../controllers/notification.controller";

const router = express.Router();

router.get('/get-all-notifications',isAuthenticated,authorizeRole("admin"),getAllNotifications)
router.put('/update-notification/:id',isAuthenticated,authorizeRole("admin"),updateNotifications)

export default router