import express from "express";

import { authorizeRole, isAuthenticated } from "../middleware/isAuth";
import { createOrder } from "../controllers/order.controller";

const router = express.Router();

router.post('/create-course',isAuthenticated,createOrder)

export default router