import express from 'express';
import {login,register,updateProfile,logout} from '../controllers/user.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router=express.Router();

router.post("/login",login);
router.post("/register",register);
router.post("/profile/update",isAuthenticated,updateProfile);
router.get('/logout',logout);

export default router;
