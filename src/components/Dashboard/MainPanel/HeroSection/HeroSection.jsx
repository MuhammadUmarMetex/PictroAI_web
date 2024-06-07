import React from "react";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import text_to_img from "@images/text_to_image.mp4";

const HeroSection = () => {
  return (
    <>
      <Link
        to="/art-generator"
        className="generate_img_sec d-block text-white px-5"
      >
        <video
          src={text_to_img}
          muted={true}
          loop={true}
          autoPlay={true}
          width="100%"
          className="rounded-2"
        ></video>
        <div className="card_content text-start mt-2 d-flex align-items-center">
          <h4 className="d-inline-block me-3" style={{ color: "white" }}>
            AI Art Generator
          </h4>

          <FontAwesomeIcon
            className="animation"
            style={{ width: "20px", height: "20px", marginBottom: "7px" }}
            icon={faAnglesRight}
          />
        </div>

        <p className="" style={{ fontWeight: "400" }}>
          Turn your words into breathtaking AI images and illustrations
          instantly!
        </p>
      </Link>
    </>
  );
};

export default HeroSection;
