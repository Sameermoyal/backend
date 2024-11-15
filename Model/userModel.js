const mongoose =require('mongoose')

const userSchema =mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true,
            // field:user_password
        },
        dob:{
            type:Date,
            require:false
        },
    }
)
module.exports =mongoose.model('user',userSchema)
