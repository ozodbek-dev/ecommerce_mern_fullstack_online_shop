import Category from "../models/category.model.js";
import slugify from "slugify";

function createCategories(categories, parentId=null){
   const categoryList = [];
   let category;

   if(parentId==null){
    category = categories.filter(cat=>cat.parentId == undefined)
   }else{
     category = categories.filter(cat=>cat.parentId== parentId);
   }

   for(let cate of category ){
     categoryList.push({
      _id:cate._id,
      name:cate.name,
      slug:cate.slug,
      children:createCategories(categories,cate._id)
     })
   }
   return categoryList;
}

export const createCategory = (req, res) => {
    console.log(req.file)
    const {name} = req.body;
    if(!name || !file){
        console.log(req.body)
     return  res.status(500).json({
           status:false,
           error:"File or name did not entered !"
       })
    }
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  const cat =  Category(categoryObj);
  cat
    .save({timestamps:true})
    .then((category) => {
      return res.status(201).json({
        success: true,
        category,
      });
    })
    .catch((err) => {
      if (err)
        res.status(400).json({
          success: false,
          error: err.message,
        });
    });
};

export const getCategories = (req, res) => {
  Category.find({})
    .then((categories) => {
      const categoryList = createCategories(categories)
      res.status(200).json({ status: true, categoryList});
    })
    .catch((err) =>
      res.status(400).json({ status: false, error: err.message })
    );
};
 