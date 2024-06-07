import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row, Container, Spinner, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import authBg from "@images/auth-bg.jpg";
import logoImg from "@images/site_logo.svg";
import Input from "@components/Input/Input";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Form as FormikForm, Formik } from "formik";
import { Helmet } from "react-helmet";
import "./auth.scss";
import { loginUser } from "../../redux/auth/auth_actions";

import backIcon from "../../assets/icons/arrow.png";
import PrevPage from "../../components/PrevPage/PrevButton";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state?.auth);
  const inititialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(loginUser(values));
      navigate("/dashboard");
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="auth-main-wrapper bgchange">
        <PrevPage />
        <Container>
          <Card className="auth-card-wrapper" bg="black">
            <Row className="justify-content-center g-0">
              {/* <Col xs={12} sm={12} md={12} lg={6}>
                <img className="auth-bg" src={authBg} alt="auth-background" />
              </Col> */}
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="auth-form-wrapper text-white ">
                  <Formik
                    initialValues={inititialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <FormikForm>
                        <Input
                          name="email"
                          // label="Email"
                          placeholder="Email Address"
                          type="text"
                        />
                        <Input
                          name="password"
                          // label="Password"
                          placeholder="Password"
                          type="password"
                        />
                        <Button
                          className="my-3 py-3 battn"
                          type="submit"
                          disabled={loading}
                        >
                          {isSubmitting ? (
                            <Spinner animation="border" size="lg" />
                          ) : (
                            "Login"
                          )}
                        </Button>
                      </FormikForm>
                    )}
                  </Formik>
                  <Link
                    className="auth-link"
                    to="/src\pages\Auth\ForgetPass.jsx"
                  >
                    I forgot my password?
                  </Link>

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
                    <div className="centeredText">New to Pictro AI?</div>
                    <div className="line"></div>
                  </div>

                  <button className="auth-button">
                    <Link className="btn-auth-link" to="/signup">
                      Sign Up for Pictro AI
                    </Link>
                  </button>
                </div>
              </Col>
            </Row>
          </Card>
          <div className="auth-footer">
            <p>
              &#169; 2024, Pictro AI &#8482; | All rights reserved by Quantum AI
              Labs, Inc. a Delware
              <br /> Corporation or its affiliates{" "}
            </p>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
