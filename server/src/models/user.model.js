import reducedModel from "../utils/mode.reduced.js";
import bcrypt from 'bcryptjs'
export default reducedModel("User", (Schema,_)=>{
   const schema =   new Schema({
        firstName:{
            type:String,
            required:true,
            trim:true,
            min:3,
            max:20
        } ,
        lastName:{
            type:String,
            required:true,
            trim:true,
            min:3,
            max:20
        },
        username:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            index:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase: true,
        },
        hash_password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            enum:["admin","user"],
            default:"admin"
        },
        contactNumber:String,
        profilePicture:String

    }, {timeStamps:true});

   schema.virtual("fullName")
       .get(function (){
            return `${this.firstName} ${this.lastName}`
       })

   schema.virtual("password")
       .set(function(password){
           this.hash_password =bcrypt.hashSync(password, 10);
       });

   schema.methods.authenticate= function (password){
       return bcrypt.compareSync(password, this.hash_password)
   }
    return schema;
})