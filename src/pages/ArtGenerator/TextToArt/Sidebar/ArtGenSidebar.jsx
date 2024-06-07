// // import React from 'react';
// // import { Nav } from 'react-bootstrap';
// // import { Link, useLocation } from 'react-router-dom';
// // import './ArtGenSidebar.scss';

// // const ArtGenSidebar = () => {
// //   const location = useLocation();

// //   return (
// //     <div className="sidebar d-flex flex-column">
// //       <div className="sidebar-header p-3">
// //         <h2>AI Art Generator</h2>
// //       </div>
// //       <Nav className="flex-column p-3">
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">
// //             <i className="fas fa-home me-2"></i>
// //             Dashboard
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/pictro-magic' ? 'active' : ''}`} to="/pictro-magic">
// //             <i className="fas fa-magic me-2"></i>
// //             Pictro Magic
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/pictro-ai-studio' ? 'active' : ''}`} to="/pictro-ai-studio">
// //             <i className="fas fa-flask me-2"></i>
// //             Pictro AI Studio
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/ai-art-generator' ? 'active' : ''}`} to="/ai-art-generator">
// //             <i className="fas fa-paint-brush me-2"></i>
// //             AI Art Generator
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/prompt-generator' ? 'active' : ''}`} to="/prompt-generator">
// //             <i className="fas fa-lightbulb me-2"></i>
// //             Prompt Generator
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/art-generator' ? 'active' : ''}`} to="/art-generator">
// //             <i className="fas fa-font me-2"></i>
// //             Text to Art
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/image-to-prompt' ? 'active' : ''}`} to="/image-to-prompt">
// //             <i className="fas fa-image me-2"></i>
// //             Image to Prompt
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/image-remix' ? 'active' : ''}`} to="/image-remix">
// //             <i className="fas fa-random me-2"></i>
// //             Image Remix
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} to="/profile">
// //             <i className="fas fa-user me-2"></i>
// //             Profile
// //           </Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Link className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`} to="/pricing">
// //             <i className="fas fa-dollar-sign me-2"></i>
// //             Pricing
// //           </Link>
// //         </Nav.Item>
// //       </Nav>
// //     </div>
// //   );
// // };

// // export default ArtGenSidebar;

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './ArtGenSidebar.scss';

// const Sidebar = () => {
//   const location = useLocation();

//   const links = [
//     { path: '/dashboard', icon: 'fas fa-home', text: 'Dashboard' },
//     { path: '/pictro-magic', icon: 'fas fa-magic', text: 'Pictro Magic' },
//     { path: '/pictro-ai-studio', icon: 'fas fa-flask', text: 'Pictro AI Studio' },
//     { path: '/ai-art-generator', icon: 'fas fa-paint-brush', text: 'AI Art Generator' },
//     { path: '/prompt-generator', icon: 'fas fa-lightbulb', text: 'Prompt Generator' },
//     { path: '/art-generator', icon: 'fas fa-font', text: 'Text to Art' },
//     { path: '/image-to-prompt', icon: 'fas fa-image', text: 'Image to Prompt' },
//     { path: '/image-remix', icon: 'fas fa-random', text: 'Image Remix' },
//     { path: '/profile', icon: 'fas fa-user', text: 'Profile' },
//     { path: '/pricing', icon: 'fas fa-dollar-sign', text: 'Pricing' },
//   ];

//   return (
//     <div className="sidebar d-flex flex-column">
//       <div className="sidebar-header p-3">
//         <h2>AI Art Generator</h2>
//       </div>
//       <nav className="flex-column p-3">
//         {links.map(link => (
//           <Link
//             key={link.path}
//             className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
//             to={link.path}
//           >
//             <i className={`${link.icon} me-2`}></i>
//             {link.text}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// sideebar3

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './ArtGenSidebar.scss';

// const Sidebar = () => {
//   const location = useLocation();

//   const links = [
//     { path: '/dashboard', icon: 'fas fa-home', text: 'Dashboard' },
//     { path: '/pictro-magic', icon: 'fas fa-magic', text: 'Pictro Magic' },
//     { path: '/pictro-ai-studio', icon: 'fas fa-flask', text: 'Pictro AI Studio' },
//     { path: '/ai-art-generator', icon: 'fas fa-paint-brush', text: 'AI Art Generator' },
//     { path: '/prompt-generator', icon: 'fas fa-lightbulb', text: 'Prompt Generator' },
//     { path: '/art-generator', icon: 'fas fa-font', text: 'Text to Art' },
//     { path: '/image-to-prompt', icon: 'fas fa-image', text: 'Image to Prompt' },
//     { path: '/image-remix', icon: 'fas fa-random', text: 'Image Remix' },
//     { path: '/profile', icon: 'fas fa-user', text: 'Profile' },
//     { path: '/pricing', icon: 'fas fa-dollar-sign', text: 'Pricing' },
//   ];

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>AI Art Generator</h2>
//       </div>
//       <nav className="nav-links">
//         {links.map(link => (
//           <Link
//             key={link.path}
//             className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
//             to={link.path}
//           >
//             <i className={`${link.icon} me-2`}></i>
//             {link.text}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// sidebar4
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './ArtGenSidebar.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const ArtGenSidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const location = useLocation();

//   const links = [
//     { path: '/dashboard', icon: 'fas fa-home', text: 'Dashboard' },
//     { path: '/pictro-magic', icon: 'fas fa-magic', text: 'Pictro Magic' },
//     { path: '/pictro-ai-studio', icon: 'fas fa-flask', text: 'Pictro AI Studio' },
//     { path: '/ai-art-generator', icon: 'fas fa-paint-brush', text: 'AI Art Generator' },
//     { path: '/prompt-generator', icon: 'fas fa-lightbulb', text: 'Prompt Generator' },
//     { path: '/art-generator', icon: 'fas fa-font', text: 'Text to Art' },
//     { path: '/image-to-prompt', icon: 'fas fa-image', text: 'Image to Prompt' },
//     { path: '/image-remix', icon: 'fas fa-random', text: 'Image Remix' },
//     { path: '/profile', icon: 'fas fa-user', text: 'Profile' },
//     { path: '/pricing', icon: 'fas fa-dollar-sign', text: 'Pricing' },
//   ];

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
//       <div className="sidebar-header">
//         <h2>AI Art Generator</h2>
//       </div>
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} />
//       </button>
//       <button className="new-chat-btn">
//         <FontAwesomeIcon icon={faPlus} /> {!isCollapsed && 'New Chat'}
//       </button>
//       <nav className="nav-links">
//         {links.map(link => (
//           <Link
//             key={link.path}
//             className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
//             to={link.path}
//           >
//             <i className={`${link.icon} me-2`}></i>
//             {!isCollapsed && link.text}
//           </Link>
//         ))}
//       </nav>

//     </div>
//   );
// };

// export default ArtGenSidebar;

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Correct import
import "./ArtGenSidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ArtGenSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { path: "/dashboard", icon: "fas fa-home", text: "Dashboard" },
    { path: "/pictro-magic", icon: "fas fa-magic", text: "Pictro Magic" },
    {
      path: "/pictro-ai-studio",
      icon: "fas fa-flask",
      text: "Pictro AI Studio",
    },
    {
      path: "/ai-art-generator",
      icon: "fas fa-paint-brush",
      text: "AI Art Generator",
    },
    {
      path: "/prompt-generator",
      icon: "fas fa-lightbulb",
      text: "Prompt Generator",
    },
    { path: "/art-generator", icon: "fas fa-font", text: "Text to Art" },
    { path: "/image-to-prompt", icon: "fas fa-image", text: "Image to Prompt" },
    { path: "/image-remix", icon: "fas fa-random", text: "Image Remix" },
    { path: "/profile", icon: "fas fa-user", text: "Profile" },
    { path: "/pricing", icon: "fas fa-dollar-sign", text: "Pricing" },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNewChat = () => {
    // window.location.replace("/art-generator")
    navigate("/art-generator"); // Redirect to art-generator page
    // window.location.reload(true)
  };

  const goBack = () => {
    // window.location.reload(true)
    // window.location.replace("/art-generator")
    // navigate('/art-generator'); // Redirect to art-generator page
    history.back();
  };

  const goFarward = () => {
    history.forward(1);
  };

  return (
    <div className={`sidebar z-3 ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2>AI Art Generator</h2>
      </div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} />
      </button>
      <button className="new-chat-btn" onClick={handleNewChat}>
        <FontAwesomeIcon icon={faPlus} /> {!isCollapsed && "New Chat"}
      </button>
      <button className="new-chat-btn" onClick={goBack}>
        <FontAwesomeIcon icon={faChevronLeft} /> {!isCollapsed && "New Chat"}
        go Back
      </button>
      <button className="new-chat-btn" onClick={goFarward}>
        <FontAwesomeIcon icon={faChevronRight} /> {!isCollapsed && "New Chat"}
        Go Farward
      </button>
      <nav className="nav-links">
        {links.map((link) => (
          <Link
            key={link.path}
            className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
            to={link.path}
          >
            <i className={`${link.icon} me-2`}></i>
            {!isCollapsed && link.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ArtGenSidebar;
