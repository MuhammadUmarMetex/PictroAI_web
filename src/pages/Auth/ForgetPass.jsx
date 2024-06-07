import react from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row, Container, Spinner, Stack } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Input from "@components/Input/Input";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import { registerUser } from "../../redux/auth/auth_actions";
import { Helmet } from "react-helmet";
import "./auth.scss";
import PrevPage from "../../components/PrevPage/PrevButton";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSendEmail = async () => {
    if (!email) {
      setError("Please enter an email address.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error("Failed to send email.");
      }
      setSent(true);
      setEmail("");
    } catch (error) {
      setError("Failed to send email: " + error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="border border-2 " style={{ height: "100vh" }}>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <PrevPage />
      <Container>
        <Stack className="border border-2 container-fluid align-items-center justify-content-center">
          <h2>Send Email</h2>
          <div>
            <label>Email Address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendEmail} disabled={sending}>
              {sending ? "Sending..." : "Send Email"}
            </button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {sent && <p style={{ color: "green" }}>Email sent successfully!</p>}
        </Stack>
      </Container>
    </div>
  );
};

export default ForgetPass;
