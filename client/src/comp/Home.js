import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import About from "./About";
import MySkills from "./MySkills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Study from "./Study";
import Contact from "./Contact";
import Review from "./Review";
import img1 from "../img/project1.jpg";
import img2 from "../img/project2.jpg";
import { getReview } from "../axiosHelper/axios";

const Home = () => {
  const [obj, setobj] = useState({});
  const [loader, setloader] = useState(false);
  const fatchData = async () => {
    const { data, status } = await getReview();

    if (status === "success") {
      setobj({ data });
      setloader(true);
    }
  };

  useEffect(() => {
    fatchData();
  }, []);
  const ProjectApi = [
    {
      heading: "Poftolio React",
      text: "Portfoli Website Development for Portfolio",
      img1: img1,
      img2: img2,
    },
    {
      heading: "Poftolio React",
      text: "Portfoli Website Development for Portfolio",
      img1: img1,
      img2: img2,
    },
    {
      heading: "Poftolio React",
      text: "Portfoli Website Development for Portfolio",
      img1: img1,
      img2: img2,
    },
  ];

  return (
    <Layout>
      <HeroSection />
      <About project={ProjectApi} />
      <MySkills />
      <Projects />
      <Testimonials obj={obj} loader={loader} />
      <Review fatchData={fatchData} />
      <Study />
      <Contact />
    </Layout>
  );
};

export default Home;
