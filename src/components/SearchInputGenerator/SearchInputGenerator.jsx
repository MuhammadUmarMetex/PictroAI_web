import React from "react";
import "./SearchInputGenerator.scss";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import PictroGeneratBtn from "@icons/icons/generatButton.svg";

const SearchInputGenerator = () => {
  return (
    <div className="w-100 ">
      <div className="hero_form  ">
        <input
          type="text"
          placeholder="Imagine a victorian city"
          className="w-100 p-3 border-0"
          //   onChange={(e) =>
          //     updateValueForKey("prompt", e.target.value)
          //   }
        />
        <button
          className="btn  d-flex align-items-center"
          //   onClick={generateImage}
        >
          {/* <i className="bi bi-star-fill"></i> */}
          {/* <FontAwesomeIcon icon="fas fa-star" />
           */}
          <img src={PictroGeneratBtn} className="rounded-circle btn-primary" />
          {/* Generate */}
        </button>
      </div>
    </div>
  );
};

export default SearchInputGenerator;
