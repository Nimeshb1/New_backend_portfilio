import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const MySkills = () => {
  const [transforms, strsetTransform] = useState(0);
  const obj = [
    {
      img: <i class="fa-brands fa-html5"></i>,
      title: "HTML & CSS",
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      img: <i class="fa-brands fa-js"></i>,
      title: "Java Script",
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      img: <i class="fa-brands fa-node"></i>,
      title: "Node.js",
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },

    {
      img: <i class="fa-solid fa-database"></i>,
      title: "Monogo DB",
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      img: <i class="fa-brands fa-react"></i>,
      title: "React Js",
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      img: <i class="fa-brands fa-bootstrap"></i>,
      title: "React Bootstrap",
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
  ];

  const rightArrowClick = () => {
    if (transforms !== -550) {
      strsetTransform(transforms - 110);
    } else {
      strsetTransform(0);
    }
  };

  const leftArrowClick = () => {
    if (transforms !== 0) {
      strsetTransform(transforms + 110);
    } else {
      strsetTransform(-550);
    }
  };

  return (
    <div className="secRow2">
      <Container>
        <Row>
          <Col
            style={{
              display: "grid",
              marginTop: "10rem",
            }}
          >
            <div className="text">
              <h4 className="text-white">
                <span className="text-primary "> / </span> {""}SKILLS
              </h4>
              <p></p>
              <h2 className="skillText">My extensive list of skills</h2>
            </div>
          </Col>
          <Col
            className=" newcol col-lg-3 d-mg-grid   "
            style={{
              marginTop: "11rem",
              fontSize: "2rem",
            }}
          >
            <div className="arrows d-flex">
              <div
                className="leftpointer text-white   "
                onClick={leftArrowClick}
              >
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div
                className="rightpointer text-white mx-3 bg-primary"
                onClick={() => rightArrowClick()}
              >
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            width: "650%",
          }}
        >
          <Col
            style={{
              display: "flex",
              gap: "40px",
              marginBottom: "3rem",
              marginTop: "5rem",
            }}
          >
            {obj.map((item) => (
              <Card
                style={{
                  width: "30rem",
                  padding: "90px 30px",
                  backgroundColor: "#2d343f",
                  borderRadius: "1rem",
                  color: "white",
                  transform: `translateX(${transforms}% )`,
                  transitionDuration: "0.3s",
                  transitionProperty: "transform",
                }}
              >
                <Card.Body>
                  <Card.Title className="image" style={{ fontSize: "3rem" }}>
                    {item.img}
                  </Card.Title>

                  <Card.Text className="title">{item.title}</Card.Text>
                  <Card.Subtitle className="mb-2 ">{item.text}</Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
        <Row>
          <Col
            className="secCol "
            style={{
              fontSize: "2rem",
            }}
          >
            <div className="arrows d-flex justify-content-center">
              <div
                className="leftpointer text-white   "
                onClick={leftArrowClick}
              >
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div
                className="rightpointer text-white mx-3 bg-primary"
                onClick={() => rightArrowClick()}
              >
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MySkills;
