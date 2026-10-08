const express=require('express')
const passport=require('passport')
const session=require('express-session')
const userModels=require('./src/models/user.models')
const isLoggedIn=require('./src/middlewares/auth.middlewares')
const authRouter=require('./src/routes/auth.route')
const createRouter=require('./src/routes/postCreate.routes')

const localStrategy=require('passport-local')
passport.use(new localStrategy(userModels.authenticate()))


const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:process.env.SECRET
}))
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(userModels.serializeUser());
passport.deserializeUser(userModels.deserializeUser());
app.set('view engine','ejs')



app.use('/',authRouter)
app.use('/',createRouter)






module.exports=app