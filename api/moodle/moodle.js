import reviewSchema from "../schema/Schema.js";
import emaiSchema from "../schema/emaiSchema.js";
export const reviewPost = (obj) => {
  return reviewSchema(obj).save();
};
export const getReview = () => {
  return reviewSchema.find();
};
export const emailsPost = (obj) => {
  return emaiSchema(obj).save();
};
