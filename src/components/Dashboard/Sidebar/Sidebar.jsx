// import React from "react";
// import Dropdown from "../DropDown/Profile/ProfileDropdown";
// import site_logo from "@images/site_logo.svg";
// import aiIcon from "@icons/AI.png";
// import canvasIcon from "@icons/canvas.png";
// import apiIcon from "@icons/API.png";
// import communityIcon from "@icons/Community.png";
// import profileIcon from "@icons/Profile.png";
// import manageIcon from "@icons/Manage.png";
// import supportIcon from "@icons/Support.png";
// import userPictroIcon from "@icons/User_Pictro.png";
// import {Link} from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';

// import "./sidebar.scss";

// const Sidebar1 = () => {
//   const { userpoints } = useSelector((state) => state.auth);
//     const points = userpoints ? userpoints : '';

//   return (
//     <>
//       <aside className="sideBar">

//         <div className="sideBar_tools">

//           <div className="tools_list">
//             <ul className="list-unstyled mb-0">
//               <li>
//                 <Link
//                   to=""
//                   className="d-flex align-items-center gap-2 text-white"
//                 >
//                   <img src={aiIcon} alt="AI" />
//                   AI Magic Tools
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to=""
//                   className="d-flex align-items-center gap-2 text-white"
//                 >
//                   <img src={canvasIcon} alt="AI" />
//                   Canvas
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to=""
//                   className="d-flex align-items-center gap-2 text-white"
//                 >
//                   <img src={apiIcon} alt="AI" />
//                   Pictro API
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="https://discord.gg/5tmEV3KBfz"
//                   className="d-flex align-items-center gap-2 text-white"
//                 >
//                   <img src={communityIcon} alt="AI" />
//                   Community Feed
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/profile"
//                   className="d-flex align-items-center gap-2 text-white"
//                 >
//                   <img src={profileIcon} alt="AI" />
//                   Profile
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="sideBar_tools mt-3">
//           <div className="tools_list">
//             <ul className="list-unstyled mb-0">
//               {/* <li>
//                 <Link
//                   to=""
//                   className="d-flex align-items-center gap-2 text-white"
//                 >
//                   <img src={manageIcon} alt="AI" />
//                   Manage Subscription
//                 </Link>
//               </li> */}
//               <li>
//                 <Link
//                   to="https://discord.gg/B2dCZuSQAY"
//                   className="d-flex align-items-center gap-2 text-white"
//                 >
//                   <img src={supportIcon} alt="AI" />
//                   Customer Support
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="sideBar_tools upgrade_plan mt-3 px-4">
//           <span className="text-black bg-white rounded-2 py-2 px-3 free_btn mb-2">
//             {points} <i className="bi bi-star-fill"></i>
//             &nbsp; &nbsp; Free
//           </span>
//           <h3 className="text-white text-center mb-2">
//             Get more out of PICTRO!
//           </h3>
//           <p className="mb-4 text-center">
//             Craft magical AI artworks without limits and share them.
//           </p>
//           <Link
//             to="/pricing"
//             className="btn btn-primary upgrade_btn d-flex align-items-center gap-2 justify-content-center"
//           >
//             <img src={manageIcon} alt="" />
//             Upgrade Plan
//           </Link>
//         </div>

//         <div className="sideBar_tools user_pictro mt-3 px-4">
//           <Dropdown />
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import Dropdown from "../DropDown/Profile/ProfileDropdown";
import site_logo from "@images/site_logo.svg";

//icons
import homeicon from "@icons/homeicon.svg";
import snap_ai from "@icons/Snap_AI.svg";
import Artist_AI from "@icons/Artist_AI.svg";
import AI_Art_Generation from "@icons/AI_Art_Generation.svg";
import InspirationsIcon from "@icons/Inspirations.svg";
import CommunityIcon from "@icons/Community.svg";
import HistoryIcon from "@icons/history-round_svgrepo.com.svg";
import Customer_SupportIcon from "@icons/Customer_Support(2).svg";
import HelpIcon from "@icons/help_svgrepo.com.svg";
import Whats_New_icon from "@icons/What’s_New_Icon.svg";
import Pictro_API_icon from "@icons/Pictro_API_Icon.svg";
import music_svgrepo_icon from "@icons/music_svgrepo.com.svg";
import flag_svgrepo_icon from "@icons/flag_svgrepo.com.svg";
import setting_icon from "@icons/setting.svg";
import feedback_icon from "@icons/feedback_svgrepo.com.svg";
import Law_icon from "@icons/Law_Assistant.svg";
import playstore_icon from "@icons/playstore.svg";
import art_icon from "@icons/art.svg";
import fire_icon from "@icons/fire.svg";

import supportIcon from "@icons/Support.png";
import userPictroIcon from "@icons/User_Pictro.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./sidebar.scss";
import { Col, ListGroup, NavLink, Row, Stack, Tab } from "react-bootstrap";
import NavLinkItem from "./SidebarItem";

const Sidebar = () => {
  const [activeKey, setActiveKey] = useState("/");
  const { userpoints } = useSelector((state) => state.auth);
  const points = userpoints ? userpoints : "";

  const sidebarLinks = [
    {
      to: "/dashboard",
      src: homeicon,
      text: "Home",
    },
    {
      to: "/pictro-magic",
      src: homeicon,
      text: "Pictro Magic",
    },
    {
      to: "/pictro-ai-studio",
      src: art_icon,
      className: "",
      text: "Pictro AI Studio",
    },
    {
      to: "/ai-art-generator",
      style: "border_bottom",
      src: AI_Art_Generation,
      text: "AI Art Generation",

      // nestedLinks: [
      //   { to: "/art-generator1", text: "Text to Art" },
      //   { to: "/textToPrompt", text: "Text to Prompt" },
      //   { to: "/imageToPrompt", text: "Image to Prompt" },
      // ],
    },

    {
      to: "/prompt-generator",
      src: AI_Art_Generation,
      text: "Prompt Generator",
    },
    {
      to: "/art-generator",
      src: AI_Art_Generation,
      text: "Text to Prompt",
    },
    {
      to: "/image-to-prompt",
      src: AI_Art_Generation,
      className: "rounded",
      text: "Image to Prompt",
      style: "border_bottom",
    },
    {
      to: "/image-remix",
      src: snap_ai,
      text: "Snap AI",

      // nestedLinks: [
      //   { to: "/Anime_Creator", text: "Anime Creator" },
      //   { to: "/Disney_Creator", text: "Disney Creator" },
      //   { to: "/Avatar_Maker", text: "Avatar Maker" },
      //   { to: "/Cartoon_Creator", text: "Cartoon Creator" },
      //   { to: "/Face_Swap", text: "Face Swap" },
      // ],
    },
    {
      to: "/amine-creator",
      src: snap_ai,
      text: "Anime Creator",
    },
    {
      to: "/Disney-Creator",
      src: snap_ai,
      text: "Disney Creator",
    },
    {
      to: "/Avatar-Maker",
      src: snap_ai,
      text: "Avatar Maker",
    },
    {
      to: "/Cartoon-Creator",
      src: snap_ai,
      text: "Cartoon Creator",
    },
    {
      to: "/Face-Swap",
      src: snap_ai,
      text: "Face Swap",
      className: "rounded",
      style: "border_bottom",
    },
    {
      to: "/Artist-AI",
      src: Artist_AI,
      text: "Artist AI",

      // nestedLinks: [
      //   { to: "/Image_Inpaint", text: "Image Inpaint" },
      //   { to: "/Pictro_Fantasy", text: "Pictro Fantasy" },
      //   { to: "/Sketch_to_Art", text: "Sketch to Art" },
      // ],
    },
    {
      to: "/Image-Inpaint",
      src: Artist_AI,
      text: "Image Inpaint",
    },
    {
      to: "/Pictro-Fantasy",
      src: Artist_AI,
      text: "Pictro Fantasy",
    },
    {
      to: "/Sketch-to-Art",
      src: Artist_AI,
      text: "Sketch to Art",
      className: "rounded",
      style: "border_bottom",
    },
  ];

  const section2Links = [
    {
      to: "/Trending",
      src: fire_icon,
      text: "Trending",
    },
    {
      to: "/Art-Collections",
      src: InspirationsIcon,
      text: "Art Collections",
      style: {
        width: "3rem",
        height: "60px",
        marginLeft: "-5px",
      },
    },
    {
      to: "https://discord.gg/5tmEV3KBfz",
      src: CommunityIcon,
      text: "Pictro Feed",
    },
    {
      to: "/History",
      src: HistoryIcon,
      text: "History",
    },
  ];

  const section3Links = [
    {
      to: "/Customer-Support",
      src: Customer_SupportIcon,
      text: "Customer Support",
    },
    {
      to: "/Help",
      src: HelpIcon,
      text: "Help",
    },
    {
      to: "/whats-new",
      src: Whats_New_icon,
      text: "What’s New",
    },
    {
      to: "/Pictro-API",
      src: Pictro_API_icon,
      text: "Pictro API",
    },
  ];

  const section4Links = [
    {
      to: "/Pictro-Mobile-App",
      src: playstore_icon,
      text: "Pictro Mobile App",
    },
    {
      to: "/AI-Music-Generator",
      className:
        "w-100 d-flex align-items-center text-nowrap gap-2 text-white rounded shadow-none",
      src: music_svgrepo_icon,
      text: "AI Music Generator",
    },
    {
      to: "/AI-Photo-Labz",
      src: playstore_icon,
      text: "AI Photo Labz",
    },
    {
      to: "/GPT-Law-Assistant",
      src: Law_icon,
      text: "GPT Law Assistant",
    },
  ];

  const section5Links = [
    {
      to: "/Report-issue",
      className: `${activeKey === "/link511" ? "active" : ""}`,
      src: flag_svgrepo_icon,
      text: "Report Issue",
      alt: "law_icon",
    },
    {
      to: "/Settings",
      className: ` ${activeKey === "/link811" ? "active" : ""}`,
      src: setting_icon,
      text: "Settings",
      alt: "law_icon",
    },
    {
      to: "/Send-feedback",
      className: ` ${activeKey === "/link911" ? "active" : ""}`,
      src: feedback_icon,
      text: "Send feedback",
      alt: "law_icon",
    },
  ];

  return (
    <>
      <aside className="sideBar z-2 d-none d-md-flex flex-column">
        <div className="sideBar_tools ">
          <div className="tools_list ">
            <ul className="list-unstyled mb-0">
              {sidebarLinks.map((link, index) => (
                <NavLinkItem
                  key={index}
                  to={link.to}
                  className={link.className}
                  src={link.src}
                  text={link.text}
                  style={link.style}
                  onClick={() => {
                    link.onClick();
                    setActiveKey(link.to);
                  }}
                  activeKey={activeKey}
                  nestedLinks={link.nestedLinks}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* sidebar second section */}
        {/* 
                  ${activeKey === "/link5" ? "active" : ""}`}
                  onClick={() => setActiveKey("/link5")}
                >
                   
                  />
                  <span className="" style={{ marginLeft: "-5px" }}>*/}

        <div className="sideBar_tools mt-2 border_bottom">
          <div className="tools_list">
            <ul className="list-unstyled mb-0">
              {section2Links.map((link, index) => (
                <NavLinkItem
                  key={index}
                  to={link.to}
                  className={link.className}
                  src={link.src}
                  text={link.text}
                  style={link.style}
                  onClick={() => {
                    link.onClick();
                    setActiveKey(link.to);
                  }}
                  activeKey={activeKey}
                />
              ))}
            </ul>
          </div>
        </div>

        {/*sidebar 3rd section  */}

        {/* <div className="sideBar_tools upgrade_plan mt-3 px-4">
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

        {/* <div className="sideBar_tools user_pictro mt-3 px-4">
          <Dropdown />
        </div> */}

        <div className="sideBar_tools mt-2 border_bottom">
          <div className="tools_list">
            <ul className="list-unstyled mb-0">
              {section3Links.map((link, index) => (
                <NavLinkItem
                  key={index}
                  to={link.to}
                  className={link.className}
                  src={link.src}
                  text={link.text}
                  style={link.style}
                  onClick={() => {
                    link.onClick();
                    setActiveKey(link.to);
                  }}
                  activeKey={activeKey}
                />
              ))}
            </ul>
          </div>
        </div>

        {/*sidebar 4th section  */}

        <div className="sideBar_tools mt-2 border_bottom">
          <div className="tools_list">
            <ul className="list-unstyled mb-0">
              {section4Links.map((link, index) => (
                <NavLinkItem
                  key={index}
                  to={link.to}
                  className={link.className}
                  src={link.src}
                  text={link.text}
                  style={link.style}
                  onClick={() => {
                    link.onClick();
                    setActiveKey(link.to);
                  }}
                  activeKey={activeKey}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* upgrade section */}
        {/* <div className="sideBar_tools upgrade_plan mt-3 px-4">
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
            <img src="" alt="" />
            Upgrade Plan
          </Link>
        </div>  */}

        {/* <div className="sideBar_tools user_pictro mt-3 px-4">
          <Dropdown />
        </div>

        {/*sidebar 5th section  */}

        <div className="sideBar_tools mt-2 border_bottom">
          <div className="tools_list">
            <ul className="list-unstyled mb-0">
              {section5Links.map((link, index) => (
                <NavLinkItem
                  key={index}
                  to={link.to}
                  className={link.className}
                  src={link.src}
                  text={link.text}
                  style={link.style}
                  onClick={() => {
                    link.onClick();
                    setActiveKey(link.to);
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="sideBar_tools mt-2  mb-5">
          <div className="tools_list">
            <div>
              <ul className="foot d-flex flex-wrap list-unstyled gap-2 text-white fw-light">
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>Copyright</NavLink>
                </li>
                <li>
                  <NavLink>Contact</NavLink>
                </li>
                <li>
                  <NavLink>Advertise</NavLink>
                </li>
                <li>
                  <NavLink>Creator</NavLink>
                </li>
              </ul>
            </div>
            <br />
            <div>
              <ul className="foot d-flex flex-wrap list-unstyled gap-2 text-white fs-8 fw-light">
                <li>
                  <NavLink>Advertise</NavLink>
                </li>
                <li>
                  <NavLink>Terms</NavLink>
                </li>
                <li>
                  <NavLink>Privacy Policy & Safety</NavLink>
                </li>
                <li>
                  <NavLink>How Pictro works</NavLink>
                </li>
                <li>
                  <NavLink>Test new feature</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
