import React from "react";

//scss
import "./PrevButton.scss";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import backIcon from "../../assets/icons/arrow.png";

const PrevPage = () => {
  return (
    <>
      <Stack gap={3} className="button mt-4 ms-5 ">
        <Link to="/" className="back-button">
          <img src={backIcon} alt="Back" className="back-icon" />
          <span className="button-text">Back</span>
        </Link>
      </Stack>
    </>
  );
};

export default PrevPage;
