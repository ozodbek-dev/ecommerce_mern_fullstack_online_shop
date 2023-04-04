import reducedModel from "../utils/model.reduced.js";

export default reducedModel("Product", (Schema, ObjectId) => {
  const schema = new Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
      offer: Number,
      productPictures: [],
      reviews: [],
      category: {
        type: ObjectId,
        ref: "Category",
      },
      createdBy: {
        type: ObjectId,
        ref: "User ",
      },
      rating:{
        type:Number,
        default:0,
      },
      views:[
        {
          type:ObjectId,
          ref:"User"
        }
      ],
      numOfViews:{
        type:Number,
        default:0
      },
      updatedAt: Date,
    },
    { timestamps: true }
  );

  return schema;
});
