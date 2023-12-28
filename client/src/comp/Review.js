import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { getReview, postReview } from "../axiosHelper/axios";
import { toast } from "react-toastify";

const Review = () => {
  const [fom, setfom] = useState({});
  const fomobj = [
    {
      name: "name",
      placeholder: " Enter Your Name",
      type: "text",
    },
    {
      name: "position",
      placeholder: " Position / Relation",
      type: "text",
    },
    {
      name: "company",
      placeholder: " Company ",
      type: "text",
    },
  ];
  console.log(fom);
  const handelOnChange = async (e) => {
    const { name, value } = e.target;
    setfom({ ...fom, [name]: value });
  };
  const handelImage = async (e) => {
    const { name, files } = e.target;

    setfom({ ...fom, [name]: files[0] });
  };

  const handelOnSubmitted = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("img", fom.img, fom.img.name);
    formdata.append("name", fom.name);
    formdata.append("position", fom.position);
    formdata.append("company", fom.company);
    formdata.append("message", fom.message);
    formdata.append("gender", fom.gender);
    const { status, message } = await postReview(formdata);
    console.log(fom);
    if (status === "success") {
      fatchData();
      toast[status](message);
    } else {
      toast.error(message);
    }
  };
  const fatchData = async () => {
    const { data } = await getReview();
  };

  return (
    <div className="secRow">
      <Container>
        <Row className="d-lg-flex d-md-flex d-grid">
          <Col
            className="col-lg-6 col-sm-12"
            style={{
              display: "grid",
              marginTop: "10rem",
            }}
          >
            {" "}
            <div className="text textposition">
              <h4 className="text-white">
                <span className="text-primary "> / </span> {""}Review
              </h4>
              <p></p>
              <h2 className="skillText">Want to Add something ?</h2>
            </div>
          </Col>
          <Col>
            <Form
              enctype="multipart/form-data"
              style={{ marginTop: "10rem", marginBottom: "2rem" }}
              onSubmit={handelOnSubmitted}
            >
              {fomobj.map((item) => (
                <input
                  required
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  style={{
                    borderBottom: "3px solid white",
                    background: "none",
                    borderRight: "transparent",
                    borderLeft: "transparent",
                    borderTop: "transparent",
                    outline: "none",
                    color: "white",
                    width: "100%",
                    fontSize: "1.3rem",
                    paddingBottom: "2rem",
                    marginBottom: "2rem",
                    marginTop: "3rem",
                  }}
                  onChange={handelOnChange}
                />
              ))}
              <textarea
                required
                name="message"
                placeholder="Describe"
                style={{
                  borderBottom: "3px solid white",
                  background: "none",
                  borderRight: "transparent",
                  borderLeft: "transparent",
                  borderTop: "transparent",
                  outline: "none",
                  color: "white",
                  width: "100%",
                  fontSize: "1.3rem",
                  paddingBottom: "2rem",
                  marginBottom: "2rem",
                  marginTop: "3rem",
                }}
                onChange={handelOnChange}
              />
              <div className="wrapperrev"></div>
              <div className="imggender d-lg-flex mb-5">
                <div className="chooseimg d-grid">
                  <label className="text-white fs-5 mb-3 ">Choose Image</label>
                  <Form.Group controlId="formFileSm" className="mb-3 ">
                    <Form.Control
                      type="file"
                      size="sm"
                      name="img"
                      onChange={handelImage}
                    />
                  </Form.Group>
                </div>
                <div className="gender d-grid" style={{ marginLeft: "40px" }}>
                  <label
                    className="text-white fs-5 mt-lg-0 mt-md-0  mt-5 "
                    name="img"
                  >
                    Sex
                  </label>
                  <select
                    required
                    name="gender"
                    id=""
                    style={{
                      borderBottom: "3px solid white",
                      background: "none",
                      borderRight: "transparent",
                      borderLeft: "transparent",
                      borderTop: "transparent",
                      outline: "none",
                      color: "white",
                      width: "100%",
                      fontSize: "1.3rem",

                      marginBottom: "2rem",
                      marginTop: "3rem",
                      backgroundColor: "rgb(34 39 47)",
                    }}
                    onChange={handelOnChange}
                  >
                    <option value="">---choose---</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  background: "none",
                  borderBottom: "3",
                  color: "white",
                  outline: "0px",
                  borderBottom: "3px solid white",
                }}
              >
                {" "}
                <h4 className=" d-flex gap-2">
                  Add<i class="fa-solid fa-arrow-right mt-1"></i>{" "}
                </h4>
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
