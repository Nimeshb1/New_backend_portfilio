import express from "express";
import { getReview, reviewPost } from "../moodle/moodle.js";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("img"), async (req, res, next) => {
  try {
    const { name, position, company, message, gender, img } = req.body;
    const { filename } = req.file;
    console.log(req.body);

    const data = await reviewPost({
      name,
      position,
      company,
      message,
      gender,
      img: req.file.filename,
    });
    console.log(data);
    if (data?._id) {
      return res.json({
        status: "success",
        message: "Thanks For your Review .🤙🤙🤙",
      });
    }
    res.json({
      status: "error",
      message: "Something went wrong, Please try again",
    });
  } catch (error) {
    const message = error.message;

    if (
      message.includes(
        "Cannot destructure property 'filename' of 'req.file' as it is undefined."
      )
    ) {
      res.json({
        status: "error",
        message:
          "Your have already add a review. For another review please refresh this browser. 😊😊",
      });
    }
    console.log(error.message);
    next(error.message);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const data = await getReview();
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
