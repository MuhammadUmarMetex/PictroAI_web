import React, { Suspense, useEffect } from "react"; // Combine the imports here
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "@components/Dashboard/Sidebar/Sidebar";
import Header from "@components/Dashboard/Header/Header";

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  let location = useLocation();
  console.log("location", location);

  useEffect(() => {
    // Check if user is not logged in and navigate to login page
    if (!isLoggedIn) {
      navigate("/login");
    }
    history.scrollRestoration = "auto";
  }, [isLoggedIn, navigate]);

  return (
    <>
      {location.pathname === "/art-generator" ? (
        <Container fluid className="p-0 position-relative  ">
          <div className="row mt-5 d-flex justify-content-between">
            <Outlet />
          </div>
        </Container>
      ) : (
        <Container fluid className="p-0 position-relative  ">
          <Header />
          <div className="row mt-5 d-flex justify-content-between">
            <Sidebar />
            <Outlet />
          </div>
        </Container>
      )}
    </>
  );
};

export default DashboardLayout;
