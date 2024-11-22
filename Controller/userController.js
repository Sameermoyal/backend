const userModel = require('../Model/userModel')
const bcrypt =require('bcrypt')
const jwt =require('jsonwebtoken')
const razorpay =require('razorpay')
const { use } = require('../Route/userRoute')
const secretKey ='dsbhycsdhbc bhycbsudhc bhvycuhb  hbuuvcchtfjv'
// exports.createUser =async(req,res)=>{
//     const data =req.body
//     const user =new userModel(data)      
// };


// exports.createUser =async(req,res)=>{
//         console.log(`>>>>req.body>>>`,req.body)
//         const user =new userModel(req.body)
//         await user.save()
//         res.status(200).json(user)
       
//     };
// exports.createUser =async(req,res)=>{
//        try{
//         console.log(`>>>>req.body>>>`,req.body)
//         const {name,email,password,dob} =req.body
//         if(!(name && email && password)){
//             return res.status(404).json({message:"all fields are required"});

//         }
//         const userDetails =await userModel.findOne({email})
//         if(userDetails){
//             return res.status(400).json({message:"email already exist"});

//         }
        
//         const salt =bcrypt.genSaltSync(10);
//         console.log(">>>>>>salt>>>",salt);

//         const hash =bcrypt.hashSync(password,salt)
//         console.log(">>>>>>hash>>>",hash);

//         const data ={
//             name,
//             email,
//             password:hash,
//             dob
//         }
//         const user =new userModel(data)
//         await user.save()
//         res.status(200).json(user)
//        }catch(err){
//         return res.status(500).json({message:"internal server error"})
//        }
       
//     };

exports.createUser =async (req,res)=>{
   try{const {name,password,email,dob}=req.body;

   if(!(name && password && email)){
    return res.status(404).json({message:"required all fields"})
   }

   const userDetails =await userModel.findOne({email}) 
   if(userDetails){
    return res.status(400).json({message:"user already resistered"})
   }

   const salt=bcrypt.genSaltSync(10);
   const hashPassword =bcrypt.hashSync(password,salt)

   const data ={
    name,
    email,
    password:hashPassword,
    dob
   }

  const user= new userModel(data);
  await user.save();

  res.status(200).json({message:"you seccessfully registersd",user})
}catch(err){
    res.status(500).json({message:"internal server error"})
}

}
// exports.userLogin =async(req,res)=>{
//    const {email,password}=req.body;
//    const userDetails =await userModel.findOne({email});
//    console.log(">>>>>>userDetails>>>>>",userDetails);
   
   
//     if(! userDetails){
//         res.status(400).json({message:" please sign up "})
//     }
//     const dataBasePassword =userDetails.password
//     console.log(">>>>>dataBasePassword>>>",dataBasePassword);

//   const match= await bcrypt.compare(password,dataBasePassword);
//   console.log(">>>match>>>>",match)
//   if(!match){
//     res.status(400).json({message:"invalid Password "})

//   }

//   const token= jwt.sign({id:userDetails._id},
//     secretKey,
//     // {expiresIn:2m}
// )

// console.log(">>>>>>token>>>>",token)

// res.status(200).json({token,message:"user login successfully"});
// }

exports.userLogin =async(req,res)=>{
   try{
    const{email,password}=req.body;
    const userDetail =await userModel.findOne({email})
    
    if(!userDetail){
       return res.status(400).json({message:"please sign up"});
    }
    const dataBasePassword =await userDetail.password;
    const match=await bcrypt.compare(password,dataBasePassword)
    
    if(!match){
        return    res.status(400).json({message:"invalid Password "})
        
          }

          
        const token=jwt.sign({id:userDetail._id},secretKey,
            // {expiresIn:1}
        )  
    res.status(200).json({message:"successfully login  ",token});
   }catch(err){
    res.status(500).json({message:"internal server error  "});
   }
}
exports.getAllUser =async(req,res)=>{
        const user =await userModel.find()

        res.status(200).json(user)
       };
exports.getSingleUser =async(req,res)=>{
      console.log(">>>>req.query",req.query);  
      
    
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



