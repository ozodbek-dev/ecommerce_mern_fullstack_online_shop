
import reducedModel from "../utils/model.reduced.js";

export default reducedModel("Review", (Schema, ObjectId) => {
  const schema = new Schema(
    {
      userId: {
        type: ObjectId,
        ref:"User",
        required: true,
      },
      type:{
        type:String,
        enum:["pictures","thumbnail"],
        default:"picture"
      },
      slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      picture_url: {
        type: Number,
        required: true,
        trim:"true",
      },
      
    },
    { timestamps: true }
  );
  return schema;
});
