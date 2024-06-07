import React from "react";

//scss
import "./header.scss";
import "../../../pages/ArtGenerator/art-generator.scss";
//img
import site_logo from "@logos/PictroAI.svg";
import manageIcon from "@icons/Manage.png";
import Switch from "@icons/Switch.svg";
import bell_Icon from "@icons/bell_Icon.svg";

import Input from "../../Input/Input";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInputGenerator from "../../SearchInputGenerator/SearchInputGenerator";
import { useSelector } from "react-redux";
import ProfileDropdown from "../DropDown/Profile/ProfileDropdown";
// import SearchInputGenerator from '@components//SearchInputGenerator.jsx';

const Header = () => {
  const { userpoints } = useSelector((state) => state.auth);
  const points = userpoints ? userpoints : "";
  return (
    <header className="header w-100 d-none d-md-flex align-content-center z-3 py-0 pe-2 pe-lg-0 pe-xl-2 pe-xxl-3">
      {/*Header logo section */}
      <div className="row w-100 p-0 gap-0 m-0">
        <div className="col-md-4 logo-container d-flex align-items-center px-0 px-3">
          <img src={site_logo} alt="" className="logo mx-0" />
        </div>

        {/*Header seacrh  section */}
        <div className="col-md-4 logo-container d-flex gap-3 align-items-center justify-content-center">
          {/* <SearchSection /> */}
          <SearchInputGenerator />
        </div>

        {/*Header user Profile section */}
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <div className="w-100 sideBar_tools user_pictro d-flex justify-content-end gap-4  ">
            <span className="d-flex cursor-pointer">
              <img src={Switch} className=" h-auto " width="30px" />
            </span>
            <span className="d-flex cursor-pointer ">
              <img src={bell_Icon} className="h-auto " width="30px" />
            </span>

            <ProfileDropdown />
          </div>

          {/* <div className="sideBar_tools upgrade_plan  mt-3 px-4">
          <span className="text-black bg-white rounded-2 py-2 px-3 free_btn mb-2">
            {points} <i className="bi bi-star-fill"></i>
            &nbsp; &nbsp; Free
          </span>
          <h3 className="text-white text-center mb-2">
            Get more out of PICTRO!
          </h3>
          <p className="mb-4 text-center">
            Craft magical AI artworks without limits and share them.
          </p>
          <Link
            to="/pricing"
            className="btn btn-primary upgrade_btn d-flex align-items-center gap-2 justify-content-center"
          >
            <img src={manageIcon} alt="" />
            Upgrade Plan
          </Link>
        </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
