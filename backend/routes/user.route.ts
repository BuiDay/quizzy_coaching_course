import express from 'express';
import { registrationUser,activateUser, loginUser,logoutUser,getUserById,updateAccessToken } from '../controllers/user.controller';
import { isAuthenticated } from '../middleware/isAuth';
const router = express.Router();

router.post('/registration',registrationUser)

router.post('/active-user',activateUser)

router.post('/login-user',loginUser)

router.get('/logout-user',isAuthenticated,logoutUser)

router.get('/refresh-token',updateAccessToken)

router.get('/get-user-by-id',isAuthenticated, getUserById)

export default router