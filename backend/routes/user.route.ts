import express from 'express';
import { registrationUser,activateUser } from '../controllers/user.controller';
const router = express.Router();

router.post('/registration',registrationUser)
router.post('/active-user',activateUser)

export default router