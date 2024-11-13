const express =require('express')
const mongoose =require('mongoose')


const port=8080
const app=express()
mongoose.connect('mongodb://localhost:27017')
.then(()=>console.log("mongo successfully connected")).catch(()=>console.log("errrrrrrrrror",err))


const sales =mongoose.Schema({

})  //create schema

const salesData =mongoose.model('sales',sales)

//http://localhost:8080/findAll
const courseSchema =mongoose.Schema({

})

const courseModelData =mongoose.model('courses',courseSchema)



app.get('/findAll',async(req,res)=>{
    const mycourseData=await courseModelData.find()
   
    const mySalesData =await salesData.find()
    res.status(200).json({course:mycourseData,sales:mySalesData})
})

app.listen(port,()=>console.log("server is run this port ",port))
