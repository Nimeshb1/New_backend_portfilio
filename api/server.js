import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./router/Router.js";
import { mongoConnect } from "./dbconfig/dbconfig.js";
import path from "path";
const _dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 8000;

// mongoconnect
mongoConnect();

// malware

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// globel error handeler
app.use((error, req, res, next) => {
  const errorCode = error.errorCode || 500;
  res.status(errorCode).json({
    status: "error",
    message: errorCode.message,
  });
});

// Router pathway
app.use("/av1/v1/review", router);

// serving

// all unchatch error
app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "Requested resources not found!",
  };
  next(error);
});
// add event listener
app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
