import express from 'express';
import { registrationUser,activateUser, loginUser,logoutUser } from '../controllers/user.controller';
import { isAuthenticated } from '../middleware/isAuth';
const router = express.Router();

router.post('/registration',registrationUser)
router.post('/active-user',activateUser)
router.post('/login-user',loginUser)
router.get('/logout-user',isAuthenticated,logoutUser)

export default router