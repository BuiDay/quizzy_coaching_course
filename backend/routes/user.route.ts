import express from 'express';
import { registrationUser,activateUser, loginUser,updateAvatar,logoutUser,getUserById,updateAccessToken, updateUserInfo, updatePassword } from '../controllers/user.controller';
import { isAuthenticated } from '../middleware/isAuth';
import { collectionMail, collectionMailContentCreation, getCollectionMail,collectionMailCTA } from '../controllers/mail.controller';
const router = express.Router();

router.post('/registration',registrationUser)

router.post('/active-user',activateUser)

router.post('/login-user',loginUser)

router.get('/logout-user',isAuthenticated,logoutUser)

router.get('/refresh-token',updateAccessToken)

router.get('/get-user-by-id',isAuthenticated, getUserById)

router.post('/collection-mail', collectionMail)
router.post('/collection-mail-content-creation', collectionMailContentCreation)
router.post('/collection-mail-action-cta', collectionMailCTA)

router.get('/get-collection-mail', getCollectionMail)

router.put('/update-user-info',isAuthenticated, updateUserInfo)
router.put('/update-user-password',isAuthenticated, updatePassword)
router.put('/update-user-avatar',isAuthenticated, updateAvatar)

export default router