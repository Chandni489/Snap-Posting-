const express=require('express')
const router=express.Router()
const authMiddleware=require('../middlewares/auth.middlewares')
const createController=require('../controllers/postCreate.controller')

router.get('/create',authMiddleware.isLoggedIn,createController.getcreate)
router.post ('/create',authMiddleware.isLoggedIn, createController.create)

router.get('/profile',authMiddleware.isLoggedIn,createController.getProfile)


router.get('/edit/:id',authMiddleware.isLoggedIn ,createController.editProfile)

router.get('/delete/:id',authMiddleware.isLoggedIn ,createController.deleteProfile)

router.post('/update/:id',authMiddleware.isLoggedIn,createController.updateProfile)




module.exports=router