const mongoose=require('mongoose')


const postSchema=new mongoose.Schema({
 user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"user"
 },
  url:[{
    type:String,
    required:true,
    
  }],
  title:{
    type:String,
    required:true,
    
  },
likes: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user'
}]

})

module.exports=mongoose.model('post',postSchema)