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

const SnapSection = ({ className }) => {
  return (
    <section className={`pt-0 pb-0 ${className}`}>
      <div className="w-100 d-flex justify-content-start gap-4 flex-wrap g-4 mt-0 ">
        {snapToolsData.map((tool, index) => (
          <SnapCard
            img={tool.imageSrc}
            title={tool.title}
            description={tool.description}
            linkTo={tool.linkTo}
            alt={tool.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default SnapSection;
