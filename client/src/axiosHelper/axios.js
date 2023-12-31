import axios from "axios";

const rooURL = "http://localhost:8000";
// process.env.NODE_ENV !== "production"
//   ? process.env.REACT_APP_REVIEW_URL
//   : process.env.REACT_APP_PRODUCTIONURL;
const rewiewUrl = rooURL + "/av1/v1/review";

export const postReview = async (obj) => {
  try {
    console.log(obj);
    const { data } = await axios.post(rewiewUrl, obj);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getReview = async () => {
  try {
    const { data } = await axios.get(rewiewUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postEmail = async (obj) => {
  try {
    const { data } = await axios.post(rewiewUrl + "/email", obj);
    return data;
  } catch (error) {
    console.log(error);
  }
};
