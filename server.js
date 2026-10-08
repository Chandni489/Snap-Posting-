require('dotenv').config()
const app=require('./app')
const toConnectDb=require('./src/config/db')
 toConnectDb()
  app.listen(3000,()=>{
    console.log("Server is Listening on 3000");
    
  })
