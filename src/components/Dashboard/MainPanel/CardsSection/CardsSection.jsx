import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  collapseSidebar,
  toggleAutoCollapse,
} from "@redux/theme/theme_slice.js";
import { Link, NavLink } from "react-router-dom";
// scss
import "../mainpanel.scss";
//icons
import { Artist_icon, Snap_Icon, Prompt_Icon } from "@icons/index.js";
//data
import {
  snapToolsData,
  ArtistToolsData,
  PromptGeneratorToolsData,
} from "../data";
//Components
// const SnapCard = lazy(() => import("@components/Card/card"));
import SnapCard from "../../Cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import ArtistSection from "./ArtistSection/ArtistSection";
import PromptSection from "./PromptSection/PromptSection";
import SnapSection from "./SnapSection/SnapSection";

const CardsSection = ({
  showSnap,
  showSnapTitle,
  showArtist,
  showArtistTitle,
  showPrompt,
  showPromptTitle,
}) => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.theme.collapsed);
  const autoCollapsed = useSelector((state) => state.theme.autoCollapsed);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch(collapseSidebar(true));
        dispatch(toggleAutoCollapse(true));
        return;
      }
      dispatch(collapseSidebar(false));
      dispatch(toggleAutoCollapse(false));
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <main className="dashbord_card_sec">
      {/* Snap AI section */}
      <div className="mt-5">
        {showSnapTitle && (
          <div
            className="col-12 d-flex align-items-end"
            // style={{ height: "70px" }}
          >
            <img
              src={Snap_Icon}
              className=""
              width="30"
              height="30"
              alt="Snap Icon"
            />
            <h4 className="text-white ms-2 mb-0">Snap AI</h4>
          </div>
        )}
        {showSnap && <SnapSection />}
      </div>

      {/* Artist AI section */}
      <div className="mt-5">
        {showArtistTitle && (
          <div
            className="col-12 d-flex align-items-end mb-3"
            // style={{ height: "70px" }}
          >
            <img
              src={Artist_icon}
              className=""
              width="30"
              height="30"
              alt="Artist Icon"
            />
            <h4 className="text-white ms-2 mb-0">Artist AI</h4>
          </div>
        )}
        {showArtist && <ArtistSection />}
      </div>

      {/* Prompts Generator section */}
      <div className="mt-5">
        {showPromptTitle && (
          <div
            className="col-12 d-flex align-items-end mb-3"
            // style={{ height: "70px" }}
          >
            <img
              src={Prompt_Icon}
              className=""
              width="30"
              height="30"
              alt="Prompt Icon"
            />
            <h4 className="text-white ms-2 mb-0">Prompt Generator</h4>
          </div>
        )}
        {showPrompt && <PromptSection className="mb-5" />}
      </div>
    </main>
  );
};

export default CardsSection;
