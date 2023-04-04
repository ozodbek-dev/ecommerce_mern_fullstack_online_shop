import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
export const requireSignIn = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);

    return userModel
      .findById(user._id)
      .then((isUserExists) => {
        if(isUserExists){
            req.user = user;
            return next();
        }
        throw new Error("Authorization is Required")
      })
      .catch((err) => {
        return res
          .status(404)
          .json({ status: false, error: "User not found. \n " + err.message });
      });
  }

  return res.status(500).json({
    success: false,
    error: "Authorization is Required",
  });
};
export const roleAccess = (role) => (req, res, next) => {
  if (req.user?.role !== role) {
    return res
      .status(400)
      .json({ success: false, error: role.toUpperCase() + " Access Denied" });
  }
  if (req.user?.role === role) {
    return next();
  }
  return res
    .status(500)
    .json({ success: false, error: "Oops, Something went wrong" });
};
