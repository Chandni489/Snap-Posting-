const express=require('express')
const passport=require('passport')
const router=express.Router()
const authController=require('../controllers/auth.controller')
// router.get('/',(req,res)=>{
//   res.render("index")
// })
// router.get('/login',(req,res)=>{
//   res.render("login")
// })
router.post('/register',authController.register)
router.get('/register',(req, res) => {
  res.render('index')
})
router.post('/login',
 passport.authenticate('local',{
    successRedirect:"/create",
    failureRedirect:"/login"
  })
)
router.get('/login', (req, res) => {
  res.render('login')
})
module.exports=router