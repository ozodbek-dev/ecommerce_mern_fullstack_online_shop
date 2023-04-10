import shortid  from "shortid";
import slugify from "slugify";
import ProductModel from "../models/product.model.js";
import PictureModel from "../models/picture.model.js";

export const createProduct  = (req, res) => {
  const {
    name, price,description,quantity, category,
  }= req.body

  if(!name || !price || !description  ||!quantity){
    return res.status(500).json({
      status:false,
      error:"Wrong data have been sent to the server. Please, check your data fields"
    })
  }


          ProductModel.create({
              name,
              price,
              description,
              category,
              quantity,
              slug:slugify(name),
              createdBy:req.user._id
          }).then(data=>{
                  res.status(201).json({
                      success:true,
                      msg:"Product has been added successfully 🙂"
                  })
                  if(req.files.length > 0){
                      req.files.forEach(file=>{
                          PictureModel.create({
                              creator:req.user._id,
                              img:file.filename,
                              picture_url:"sample url",
                              productId:data._id
                          }).then((response)=>{})
                              .catch((err)=>{
                                  return  res.status(400).json({
                                      status:false,
                                      error:"Something went wrong during sending data to the server! \n " + err?.message
                                  })
                              })
                      })
                  };
              })
              .catch(err=>{
                  return    res.status(400).json({
                      status:false,
                      error:"Something went wrong during sending data to the server! \n " + err?.message
                  })
              })

};
