import User from "../../models/user.model.js";
import jwt from 'jsonwebtoken'

export const signUpCtrl = (req, res)=>{
    User.findOne({email:req.body.email})
        .then((user)=>{
             if(user){
                 return res.status(400).json({
                     success:false,
                     message:"Admin Already Registered"
                 })
             }
             const {
                 firstName,
                 lastName,
                 email,
                 username,
                 password,
             } = req.body;

             const _user = new User({
                 firstName,
                 lastName,
                 username,
                 email,
                 password,
                 role:"admin"
             })
            _user.save().then((user)=>{
                if(user) return res.status(201).json({success:true,msg:"Admin registered Successfully"})
            }).catch(error=>{
                if(error) return res.status(400).json({
                    success:false,
                    message:"Something went wrong! " + error?.message
                })

            })
        }).catch(error=>{
        if(error) return res.status(400).json({
            success:false,
            message:error.message
        })
    })
}

export const signInCtrl = (req, res)=>{
    User.findOne({email:req.body.email})
        .then((user)=>{
            if(user){
                 if(user.authenticate(req.body.password) && user.role==='admin'){
                    const token = jwt.sign({_id: user._id },process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_TIME });
                    const {_id,firstName,lastName,email,role, fullName } = user;
                    res.status(200)
                        .json({
                            token,
                            user:{
                               _id, firstName,lastName,email,role,fullName
                            }
                        })

                 }
                 else{
                     res.status(401).json({
                         success:false,
                         message:"Invalid Pvassword!"
                     })
                 }
            }
        }).catch(error=>{
            if(error){
                res.status(400).json({
                    success:false,
                    message:"Something Went Wrong! " + error?.message
                })
            }
    })
}

export const profileCtrl = (req, res)=>{
    User.findOne({email:req.body.email})
        .then((user)=>{
            if(user){
                if(user.authenticate(req.body.password)){
                    const token = jwt.sign({_id: user._id },process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_TIME });
                    const {_id,firstName,lastName,email,role, fullName } = user;
                    res.status(200)
                        .json({
                            token,
                            user:{
                                _id, firstName,lastName,email,role,fullName
                            }
                        })
                }
                else{
                    res.status(401).json({
                        success:false,
                        message:"Invalid Pvassword!"
                    })
                }
            }
        }).catch(error=>{
        if(error){
            res.status(400).json({
                success:false,
                message:"Something Went Wrong! " + error?.message
            })
        }
    })
}