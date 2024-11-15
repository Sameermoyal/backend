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

