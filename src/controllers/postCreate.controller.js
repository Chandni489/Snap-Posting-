
const postModel=require('../models/post.models')


async function create(req,res) {
  const {url,title}=req.body
  const postdata=new postModel({
  user:req.user._id,
    url,title
  })
  await postModel.create(postdata)
  res.redirect('/profile')

}
async function getcreate(req,res) {
  console.log("CREATE ROUTE")
  console.log("USER:", req.user)
  console.log("AUTH:", req.isAuthenticated())
  res.render("create")
}

 async function getProfile (req,res){
  const postdata=await postModel.find({user:req.user._id}).populate('user')

  res.render("profile",{postdata})
}
async function editProfile(req,res){
  const editUser=await postModel.findOne({_id:req.params.id,user: req.user._id})
  res.render("edit",{editUser})
}
async function deleteProfile(req,res){
  await postModel.findOneAndDelete({_id:req.params.id,user: req.user._id})
  res.redirect("/profile")
}
async function updateProfile(req,res){
  const {title,url} =req.body
  const updateUser=await postModel.findOneAndUpdate({_id:req.params.id,user: req.user._id},{title,url})
  res.redirect("/profile")
}
module.exports={
  create,getcreate,getProfile,editProfile,deleteProfile,updateProfile
}