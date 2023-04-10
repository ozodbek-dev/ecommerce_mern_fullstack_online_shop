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
      reviews: [],
      category: {
        type: ObjectId,
        ref: "Category",
          required:true
      },
      createdBy: {
        type: ObjectId,
        ref: "User ",
      },
      rating:{
        type:Number,
        default:0,
      },
        quantity:{
          type:Number,
            required:true
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
