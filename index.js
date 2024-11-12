const express =require('express')
const mongoose =require('mongoose')

const app=express();
const port=8989
const mongoURL ='mongodb://localhost:27017'

mongoose.connect(mongoURL).then(()=>console.log("successfully connected to  mongoDB")).catch((err)=>console.log("error to connect mongoDB",err))


app.listen(port,()=>{
    console.log(`server is runnig on this port ${port}`)
})

