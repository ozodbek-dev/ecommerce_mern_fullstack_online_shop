import reducedModel from "../utils/model.reduced.js";

export default reducedModel("Picture", (Schema, ObjectId) => {
  const schema = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: "Product",
        required: true,
      },
      productId: {
        type: ObjectId,
        ref: "Product",
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true }
  );
  return schema;
});
