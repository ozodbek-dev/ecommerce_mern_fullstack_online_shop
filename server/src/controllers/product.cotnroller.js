import Category from "../models/category.model.js";
import shortid  from "shortid";
import slugify from "slugify";

export const createProduct  = (req, res) => {
  res.status(200).json({file: req.file, body:req.body })
};
