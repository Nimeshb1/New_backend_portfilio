import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./router/Router.js";
import { mongoConnect } from "./dbconfig/dbconfig.js";

const app = express();
const PORT = process.env.PORT || 8000;

// mongoconnect
mongoConnect();

// malware

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));

// globel error handeler
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || "Internal Server Error";

  res.status(statusCode).json({
    status: "error",
    message: errorMessage,
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
