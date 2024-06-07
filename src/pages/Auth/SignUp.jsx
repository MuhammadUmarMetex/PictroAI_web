import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row, Container, Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Input from "@components/Input/Input";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import { registerUser } from "../../redux/auth/auth_actions";
import { Helmet } from "react-helmet";
import "./auth.scss";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth?.loading);
  const inititialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone_number: Yup.number(),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be atleast 6"),
    confirmPassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(registerUser(values));
      navigate("/login");
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="auth-main-wrapper bgchange">
        <Container>
          <Card className="auth-card-wrapper" bg="black">
            <Row className="justify-content-center g-0">
              {/* <Col xs={12} sm={4} md={6}>
                <img className="auth-bg" src={authBg} alt="auth-background" />
              </Col> */}
              <Col xs={12} sm={8} md={6}>
                <div className="auth-form-wrapper text-white">
                  {/* <img className="auth-logo" src={logoImg} alt="auth-logo" />
                  <h3 className="auth-form-title">Sign in to you account</h3> */}
                  <Formik
                    initialValues={inititialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <FormikForm>
                        <Input
                          name="name"
                          placeholder="john doe"
                          label="Full name"
                          type="text"
                        />
                        <Input
                          name="email"
                          placeholder="user@domain.com"
                          label="Email"
                          type="text"
                        />
                        {/* <Input
                          name="phone_number"
                          placeholder="+1233242455"
                          label="Phone"
                          type="text"
                        /> */}
                        <Input
                          name="password"
                          placeholder="password"
                          label="Password"
                          type="password"
                        />
                        <Input
                          name="confirmPassword"
                          placeholder="confirm password"
                          label="Confirm Password"
                          type="password"
                        />
                        <Button
                          className="my-3 battn"
                          type="submit"
                          disabled={loading}
                        >
                          {isSubmitting ? (
                            <Spinner animation="border" />
                          ) : (
                            "Sign Up"
                          )}
                        </Button>
                      </FormikForm>
                    )}
                  </Formik>
                  <p className="auth-cookie">
                    By continuing you agree to the{" "}
                    <Link className="pictro-cookies" to="#">
                      Pictro AI Customer Agreement
                    </Link>{" "}
                    or other <br />
                    agreement for Pictro AI services , and the{" "}
                    <Link>Privacy Notice</Link>.This site uses <br />
                    essential cookies. See our <Link>Cookies Notice</Link> for
                    more information.
                  </p>

                  <div className="auth-line">
                    <div className="line"></div>
                    <div className="centeredText">Already a Customer?</div>
                    <div className="line"></div>
                  </div>

                  <button className="auth-button">
                    <Link className="auth-link" to="/login">
                      Login to Pictro AI
                    </Link>
                  </button>
                </div>
              </Col>
            </Row>
          </Card>
          <div className="auth-footer">
            <p>
              &#169; 2024, Pictora AI&#8482; | All rights reserved by Quantum AI
              Labs, Inc. a Delware
              <br /> Corporation & its affiliates{" "}
            </p>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Signup;
