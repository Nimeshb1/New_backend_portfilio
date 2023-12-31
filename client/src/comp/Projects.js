import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../img/project1.jpg";
import img1 from "../img/project2.jpg";
import img2 from "../img/l1.jpg";
import img3 from "../img/l2.jpg";
import img4 from "../img/p1.jpg";
import img5 from "../img/p2.jpg";

const Projects = () => {
  const obj = [
    {
      title: "Portfolio React",
      subtitle: "Portfoli Website Development for portfolio",
    },
    {
      title: "Library Managment System ",
      subtitle: "Library Managment System Development for Library",
    },
    {
      title: "Roofing Website",
      subtitle: "Website for roofing Professional Roofing company",
    },
  ];
  return (
    <div className="project">
      <Container>
        <Row style={{}}>
          {" "}
          <Col
            style={{
              display: "grid",
              alignItems: "center",
            }}
          >
            <div className="text mt-md-5 mt-sm-5 mt-5">
              <h4 className="text-white">
                <span className="text-primary "> / </span> {""}MY PROJECTS
              </h4>
              <p></p>
              <div className="wrapperproject">
                <h2 className="skillText">Take a look at the</h2>
                <h2>
                  <span> latest Project I've done</span>
                </h2>
              </div>
              <div className="text2 mt-5 ">
                <a href="#">
                  <h5 className="text-white mb-5 d-flex ">
                    SHOW MORE {""}
                    <i class="fa-solid fa-right-long mt-1 "></i>{" "}
                  </h5>
                </a>
              </div>
            </div>
            <div
              className="projectCard "
              style={{
                overflow: "hidden",
              }}
            >
              <div className="hedaing  d-flex justify-content-end gap-4">
                <a href="https://github.com/Nimeshb1">
                  {" "}
                  <button sty>Github</button>
                </a>
                <a href="">
                  {" "}
                  <button>Web link</button>
                </a>
              </div>
              <div className="subheading text-white">
                <div className="title" style={{ fontSize: "2rem" }}>
                  <i class="fa-solid fa-code"></i> {obj[2].title}
                </div>
                <div
                  className="sub-title"
                  style={{
                    fontSize: "3rem",
                    WebkitTextStroke: "1px",
                    marginTop: "1rem",
                  }}
                >
                  {obj[2].subtitle}
                </div>
              </div>
              <div
                className="projectImg"
                style={{
                  width: "600px",
                }}
              >
                <div className="img1">
                  {" "}
                  <img src={img5} alt="" width={800} />
                </div>
                <div className="img2 " style={{ marginLeft: "9rem" }}>
                  {" "}
                  <img src={img4} alt="" height={500} />
                </div>
              </div>
            </div>
          </Col>
          <Col className=" mx-lg-5  ">
            {" "}
            <div
              className="projectCard  mt-lg-5"
              style={{ overflow: "hidden" }}
            >
              <div className="hedaing  d-flex justify-content-end gap-4">
                <a href="https://github.com/Nimeshb1">
                  {" "}
                  <button sty>Github</button>
                </a>
                <a href="">
                  {" "}
                  <button>Web link</button>
                </a>
              </div>
              <div className="subheading text-white">
                <div className="title" style={{ fontSize: "2rem" }}>
                  <i class="fa-solid fa-code"></i> Portfolio React
                </div>
                <div
                  className="sub-title"
                  style={{
                    fontSize: "3rem",
                    WebkitTextStroke: "1px",
                    marginTop: "1rem",
                  }}
                >
                  Portfoli Website <p>Development for Portfolio</p>
                </div>
              </div>
              <div
                className="projectImg"
                style={{
                  width: "600px",
                }}
              >
                <div className="img1">
                  {" "}
                  <img src={img} alt="" width={800} />
                </div>
                <div className="img2 " style={{ marginLeft: "9rem" }}>
                  {" "}
                  <img src={img1} alt="" height={500} />
                </div>
              </div>
            </div>
            <div
              className="projectCard "
              style={{
                overflow: "hidden",
                marginTop: "7rem",
                marginBottom: "7rem",
              }}
            >
              <div className="hedaing  d-flex justify-content-end gap-4">
                <a href="https://github.com/Nimeshb1">
                  {" "}
                  <button sty>Github</button>
                </a>
                <a href="">
                  {" "}
                  <button>Web link</button>
                </a>
              </div>
              <div className="subheading text-white">
                <div className="title">
                  <i class="fa-solid fa-code"></i> {obj[1].title}
                </div>
                <div
                  className="sub-title"
                  style={{
                    fontSize: "3rem",
                    WebkitTextStroke: "1px",
                  }}
                >
                  {obj[1].subtitle}
                </div>
              </div>
              <div
                className="projectImg"
                style={{
                  width: "600px",
                }}
              >
                <div className="img1">
                  {" "}
                  <img src={img2} alt="" width={800} />
                </div>
                <div className="img2 " style={{ marginLeft: "9rem" }}>
                  {" "}
                  <img src={img3} alt="" height={500} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
