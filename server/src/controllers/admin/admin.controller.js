import User from "../../models/user.model.js";
import jwt from 'jsonwebtoken'


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
                        error:"Invalid Pvassword!"
                    })
                }
            }
        }).catch(error=>{
        if(error){
            res.status(400).json({
                success:false,
                error:"Something Went Wrong! " + error?.message
            })
        }
    })
}