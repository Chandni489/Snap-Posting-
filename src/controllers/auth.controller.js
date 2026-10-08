const userModel=require('../models/user.models')

async function register(req,res){
  const {username,email,password}=req.body
  const userData=new userModel({
    username,email
  })
  await userModel.register(userData,password)
  res.redirect('/login')
}

module.exports={
  register
}