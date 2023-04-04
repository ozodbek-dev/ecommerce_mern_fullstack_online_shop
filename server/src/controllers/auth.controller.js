import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signUpCtrl = (role) => (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).json({
          success: false,
          message: user.role.toUpperCase() + " Already Registered",
        });
      }
      const { firstName, lastName, email, username, password } = req.body;

      const body = { firstName, lastName, email, username, password,role };

     
      const _user = new User(body);
      _user
        .save()
        .then((user) => {
          if (user)
            return res
              .status(201)
              .json({
                success: true,
                msg: role.toUpperCase() + " registered Successfully",
              });
        })
        .catch((error) => {
          if (error)
            return res.status(400).json({
              success: false,
              error: "Something went wrong! " + error?.message,
            });
        });
    })
    .catch((error) => {
      if (error)
        return res.status(400).json({
          success: false,
          error: error.message,
        });
    });
};

export const signInCtrl = (role) => (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (user.authenticate(req.body.password) && user.role === role) {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_TIME }
          );
          const { _id, firstName, lastName, email, role, fullName } = user;
          res.status(200).json({
            token,
            user: {
              _id,
              firstName,
              lastName,
              email,
              role,
              fullName,
            },
          });
        } else {
          res.status(401).json({
            success: false,
            error: "Invalid Pvassword or User role",
          });
        }
      }
      else throw new Error("User Not found")
    })
    .catch((error) => {
      if (error) {
        res.status(400).json({
          success: false,
          error: "Something Went Wrong! " + error?.message,
        });
      }
    });
};

export const profileCtrl = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (user.authenticate(req.body.password)) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_TIME,
          });
          const { _id, firstName, lastName, email, role, fullName } = user;
          res.status(200).json({
            token,
            user: {
              _id,
              firstName,
              lastName,
              email,
              role,
              fullName,
            },
          });
        } else {
          res.status(401).json({
            success: false,
            error: "Invalid Pvassword!",
          });
        }
      }
    })
    .catch((error) => {
      if (error) {
        res.status(400).json({
          success: false,
          error: "Something Went Wrong! " + error?.message,
        });
      }
    });
};
