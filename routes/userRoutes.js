const express=require('express');
const router = express.Router()
// auth authMiddleware
const authMiddleware=require('../middleware/authMiddleware')


//usercontroller  
const{register,login,checkuser}=require('../controller/userController')


//register route
router.post('/register', register) 

//register user 
router.post('/login',login) 
//check user 
//register route
router.get('/check', authMiddleware, checkuser)  

// router.get('/all-question',authMiddleware,getAllQuestions)
// router.get('/single-question',authMiddleware,getSingleQuestion)

module.exports=router