const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors');

const app=express()
const port=8989

const mongoURL='mongodb://localhost:27017'

app.use(cors()); 

mongoose.connect(mongoURL)
.then(()=>console.log("mongoDB  connected successfully"))
.catch((err)=>console.log("eroooooooooor ",err))

const mongoSchema =mongoose.Schema({})
const modelData =mongoose.model('sales',mongoSchema)

// app.get('/getOne/:id',async (req,res)=>{
//     console.log(req.params);
//     const {id}=req.params
//     data=await modelData.findById(id)
//      console.log(">>>>data>>>>>>",data) 
//      if(!data){
//         return res.status(404).json({error:'record not found'});
//      }
//      res.status(200).json(data)

// })

app.get('/getAll',async(req,res)=>{
  const salesData= await  modelData.find()
  res.status(200).json(salesData)

})
app.get('/getOne/:id',async(req,res)=>{
   const {id}=req.params
  const salesData= await  modelData.findById(id)
  res.status(200).json(salesData)

})
app.get('/getAm/:am',async(req,res)=>{
   const {am}=req.params
   const rate=parseInt(am)
  const salesData = await modelData.findOne({ amount: rate });
  
  res.status(200).json(salesData)

})

app.delete('/removeOne/:id',async (req,res)=>{
    console.log(req.params);
    const {id}=req.params
    const data=await modelData.findByIdAndDelete(id)
     console.log(">>>>data>>>>>>",data) 
     if(!data){
        return res.status(404).json({error:'record not found'});
     }
     res.status(200).json(data)

})
app.get('/getAmount/:rate',async (req,res)=>{
    console.log(req.params);
    const {rate}=req.params
    const data=await modelData.findOne({quantity:parseInt(rate)})
     console.log(">>>>data>>>>>>",data) 
     if(!data){
        return res.status(404).json({error:'record not found'});
     }
     res.status(200).json(data)

})



//http://localhost:8989/data

app.listen(port,()=>{
    console.log("app successfully running this port",{port})
})