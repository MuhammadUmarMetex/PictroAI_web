import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  collapseSidebar,
  toggleAutoCollapse,
} from "@redux/theme/theme_slice.js";
import { Link, NavLink } from "react-router-dom";
// scss
import "../../mainpanel.scss";
//icons
import { Artist_icon, Snap_Icon, Prompt_Icon } from "@icons/index.js";
//data
import {
  snapToolsData,
  ArtistToolsData,
  PromptGeneratorToolsData,
} from "../../data";
//Components
// const SnapCard = lazy(() => import("@components/Card/card"));
import SnapCard from "../../../Cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const PromptSection = ({ className }) => {
  return (
    <section className={`pt-0 pb-0 ${className}`}>
      <div className="w-100 d-flex justify-content-start gap-4 flex-wrap mt-0 ">
        {PromptGeneratorToolsData.map((tool, index) => (
          // <div key={index} className="col-lg-12 col-md-6 bg_light_dark rounded-4  border-warning">
          //   <div className="al_card m-auto bg_light_dark rounded-4 border border-warning">
          <Link
            to={tool.linkTo}
            className=""
            style={{ width: "500px", height: "350px" }}
          >
            <div className="al_card bg_light_dark rounded-4 py-2 px-3 ">
              <div className="card_image mt-1">
                <img
                  src={tool.imageSrc}
                  alt={`card img ${index + 1}`}
                  className="mb-2 rounded-4"
                  width="100%"
                  height="231px"
                />
              </div>
              <div className="card_content d-flex justify-content-between px-2  my-3 ">
                <div className="">
                  <h3 className="text-white fs-x-large ">{tool.title}</h3>
                  <p className="text-white fs-12 fw-3 ls-1 lh-sm">
                    {tool.description}
                  </p>
                </div>
                <div className="d-flex align-items-end  ">
                  <FontAwesomeIcon
                    className="animation text-white"
                    style={{ width: "15px", height: "15px" }}
                    icon={faAnglesRight}
                  />
                </div>
              </div>
            </div>
          </Link>
          // </div>
        ))}
      </div>
    </section>
  );
};

export default PromptSection;
