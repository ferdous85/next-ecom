import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        default: "user"
    },
    root:{
        type:String,
        default: false
    },
    avatar:{
        type:String,
        default: "https://res.cloudinary.com/dbecommerce/image/upload/v1637641726/Profile_w8mrpw.png"
    },
},
{timestamps:true})

let Dataset = mongoose.models.user || mongoose.model("user", userSchema)

export default Dataset