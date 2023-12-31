import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

const Testimonials = ({ obj, loader }) => {
  const [slide, setslide] = useState(0);
  const [current, setCurrent] = useState(1);

  const rightArrowClick = () => {
    setCurrent(current === obj.data.length - 1 ? 0 : current + 1);

    if (current > 0) {
      setslide(slide - 100);
    } else {
      setslide(0);
    }
  };
  const leftArrowClick = () => {
    setCurrent(current === 0 ? obj.data.length - 1 : current - 1);

    if (current > 1 || current === 0) {
      setslide(slide + 100);
    } else {
      setslide(-100 * (obj.data.length - 1));
    }
  };

  return (
    <div className="secRow2">
      <Container>
        <Row>
          <Col
            className="col-12"
            style={{
              marginTop: "10rem",
            }}
          >
            <div className="text">
              <h4 className="text-white">
                <span className="text-primary "> / </span> Testimonials
              </h4>
              <p></p>
              <h2 className="skillText fs-sm-1">
                What Co-workers and Managers Says about my work
              </h2>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row
          style={{
            overflow: "hidden",
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          {loader === true ? (
            <>
              {obj.data?.map((item, i) => (
                <div
                  key={i}
                  className="mainbodyt  d-lg-flex "
                  style={{
                    transform: `translateX(${slide}%)`,
                    transitionDuration: "1s",
                  }}
                >
                  <Col className="newCard col-lg-5 col-4 ">
                    <div className="footerimg2">
                      <img
                        src={
                          process.env.REACT_APP_PRODUCTIONURL +
                          `/image/${item.img}`
                        }
                        alt=""
                        style={{ objectFit: "contain" }}
                        className="footerimg3"
                        width={1500}
                      />
                    </div>
                  </Col>
                  <Col className="col-lg-7" style={{ paddingLeft: "3rem" }}>
                    <Card
                      style={{
                        backgroundColor: "transparent",
                        border: "transparent",
                      }}
                    >
                      <Card.Body>
                        <Card.Title
                          className="workpalce text-white mt-5"
                          style={{ fontSize: "3rem", WebkitTextStroke: "1px" }}
                        >
                          {" "}
                          {item.gender === "male" ? (
                            <i
                              style={{
                                fontSize: "2rem",
                                color: "blue",
                                marginRight: "7px",
                              }}
                              className="fa-solid fa-user"
                            ></i>
                          ) : (
                            <span
                              style={{
                                fontSize: "2rem",
                                color: "yellow",
                                marginRight: "7px",
                              }}
                              class="material-symbols-outlined"
                            >
                              face_3
                            </span>
                          )}
                          {item.name}
                        </Card.Title>
                        <Card.Text
                          className="maintext mt-5"
                          style={{ color: "white" }}
                        >
                          {" "}
                          <h2>"{item.message}"</h2>{" "}
                        </Card.Text>
                        <Card.Text className="nametext mt-5">
                          <h4 className="text-white">
                            {" "}
                            <span className="text-primary "> / </span> {""}
                            {item.company}
                          </h4>
                        </Card.Text>
                        <Card.Text className="skillText text-white">
                          <h2>{item.position}</h2>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              ))}{" "}
            </>
          ) : (
            <Spinner animation="border" variant="light"></Spinner>
          )}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className=" d-flex mt-5 md-justify-content-center mb-5">
              <div
                className="leftpointer2 text-white   "
                onClick={leftArrowClick}
              >
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div
                className="rightpointer2 text-white mx-3 bg-primary"
                onClick={rightArrowClick}
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

export default Testimonials;
