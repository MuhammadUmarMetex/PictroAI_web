import React, { lazy, useEffect } from "react";

import "./mainpanel.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";

//Components
const CardsSection = lazy(() => import("./CardsSection/CardsSection"));
import Card from "@components/Card/Card";
import HeroSection from "./HeroSection/HeroSection";

const MainPanel = (props) => {
  return (
    <>
      <section className="main pb-0 pt-0 px-0 pe-md-3 pe-lg-0 pe-xl-0  mx-0 d-md-flex d-none mb-5">
        {/* <div className="announcement-bar">
        <div className="marquee-content">We're thrilled to announce that a new design for our website is on the way! Our team is working hard to bring you a fresh and improved online experience.</div>
    </div> */}
        <div className="row w-100 d-flex justify-content-end px-0 mx-0">
          <div className="col-lg-2 col-md-4 col-4">
            {/* Content views will be rendered here */}
            {props.children}
          </div>

          {/* <div className="col-x-lg-10 col-lg-9 col-md-8 col-8 border border-danger"> */}
          <div className="">
            <div className="main_body_content ">
              <HeroSection />
              <CardsSection
                showSnap={true}
                showSnapTitle={true}
                showArtist={true}
                showArtistTitle={true}
                showPrompt={true}
                showPromptTitle={true}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="d-md-none d-flex mobile_msg">
        <p className="text-white text-center">
          Pictro AI web is only available on desktop.
        </p>
      </div>
    </>
  );
};
export default MainPanel;
