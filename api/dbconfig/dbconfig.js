import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CLIENT);

    conn ? console.log("Mongo connected") : console.log(error);
  } catch (error) {
    console.log(error.message);
  }
};
