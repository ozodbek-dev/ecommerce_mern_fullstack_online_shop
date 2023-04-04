import reducedModel from "../utils/model.reduced.js";

export default reducedModel("Category",(Schema,_ )=>{
   const schema = new Schema({
    name:{
      type:String,
      required:true,
      trim:true, 
    },
    slug:{
      type:String,
      required:true,
      unique:true, 
      trim:true, 
    },
    parentId:String 
   },{timestamps:true});

  return schema;
})