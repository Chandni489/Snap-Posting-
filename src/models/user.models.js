const mongoose=require('mongoose')
const plm=require('passport-local-mongoose').default
// mongoose.connect("mongodb://127.0.0.1:27017/postCreate")
const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true
    
  },
  email:{
    type:String,
    required:true,
    
  },

})
userSchema.plugin(plm)
module.exports=mongoose.model('user',userSchema)