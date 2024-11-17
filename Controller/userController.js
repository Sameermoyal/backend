const userModel = require('../Model/userModel')

// exports.createUser =async(req,res)=>{
//     const data =req.body
//     const user =new userModel(data)      
// };


exports.createUser =async(req,res)=>{
        console.log(`>>>>req.body>>>`,req.body)
        const user =new userModel(req.body)
        await user.save()
        res.status(200).json(user)
       
    };
exports.getAllUser =async(req,res)=>{
        const user =await userModel.find()

        res.status(200).json(user)
       };

exports.updateUser =async(req,res)=>{
    console.log(`>>////>>req.body>>>`,req.body)
    
    const {id} =req.body
    const data =req.body
    const user =await userModel.findByIdAndUpdate(id,data)
    res.status(200).json(user)
       
    }; 
exports.deleteUser =async(req,res)=>{
    console.log("Request params:", req.params);

    
    const {id} =req.params
    const user =await userModel.findByIdAndDelete(id)
    res.status(200).json(user)
       
    }; 



