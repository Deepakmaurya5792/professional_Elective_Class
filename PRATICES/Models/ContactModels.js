import mongoose from  "mongoose"

const ContactSchema =new mongoose.Schema({
    name:{
        type:String ,
        required :true
    },
    email:
    {
        type:Number,
        required:true
    },
    Phone:
    {
        type:Number,
        required:true
    }

})
const Contact=mongoose.model("Contact",ContactSchema)
 export default ContactSchema 