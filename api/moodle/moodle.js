import reviewSchema from "../schema/Schema.js";
export const reviewPost = (obj) => {
  return reviewSchema(obj).save();
};
export const getReview = () => {
  return reviewSchema.find();
};
