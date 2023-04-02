import { check, validationResult } from "express-validator";
export const userSignUpValidateRequest = [
  check("firstName").notEmpty().withMessage("firstName is required"),
  check("lastName").notEmpty().withMessage("lastName is required"),
  check("email")
    .isEmail()
    .withMessage("Valid email is required")
    .notEmpty()
    .withMessage("email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password Must be at least 6 characters")
    .notEmpty()
    .withMessage("password is required"),
];
export const userSignInValidateRequest = [
  check("email")
    .isEmail()
    .withMessage("Valid email is required")
    .notEmpty()
    .withMessage("email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password Must be at least 6 characters")
    .notEmpty()
    .withMessage("password is required"),
];

export const isReqValidated = (req, res, next) => {
  const { errors } = validationResult(req);

  if (errors.length > 0) {
    return res.status(500).json({ status: false, mesage: errors[0].msg });
  }
  next();
};
