
import reducedModel from "../utils/model.reduced.js";
import * as stream from "stream";

export default reducedModel("Picture", (Schema, ObjectId) => {
  const schema = new Schema(
    {
      creator: {
        type: ObjectId,
        ref:"User",
        required: true,
      },
      picture_url: {
        type: String,
        trim:"true",
      },
        img:{
          type:String,
            required:true
        }
    },
    { timestamps: true }
  );
  return schema;
});
