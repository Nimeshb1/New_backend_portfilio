import React from "react";
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

const Home = () => {
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
      <Testimonials />
      <Review />
      <Study />
      <Contact />
    </Layout>
  );
};

export default Home;
