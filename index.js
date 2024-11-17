const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()


const app=express()
const port=process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({extended:true}))


const userRouter =require('./Route/userRoute')
app.use('/abc',userRouter)


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   console.log("mongoDB  connected successfully")})
.catch((err)=>console.log("eroooooooooor ",err))

app.listen(port,()=>{
    console.log("app successfully running this port",{port})
})