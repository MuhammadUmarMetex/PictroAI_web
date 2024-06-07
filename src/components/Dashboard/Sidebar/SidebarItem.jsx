// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./sidebar.scss";

// const NavLinkItem = ({
//   to,
//   className,
//   src,
//   text,
//   style,
//   onClick,
//   activeKey,
//   nestedLinks,
// }) => {

//   const navigate = useNavigate()
//   return (
//     <li className={`mb-1 p-0 ${style}`}>
//       {
//       to==="/dashboard" ?
//       <NavLink
//         to="/dashboard"
//         className={`px-2 py-2 w-100 d-flex align-items-center gap-2 text-white rounded shadow-none ${className}`}
//         style={{ height: "40px" }}

//       >
//         {src && (
//           <span className="mb-1 d-inline-flex">
//             <img
//               src={src}
//               alt={text}
//               className=" "
//               style={{ height: "24px", width: "24px" }}
//             />
//           </span>
//         )}
//         <span className="">{text}</span>
//       </NavLink>
//       :
//       <NavLink
//         to={to}
//         className={`px-2 py-2 w-100 d-flex align-items-center gap-2 text-white rounded shadow-none ${className}`}
//         style={{ height: "40px" }}

//       >
//         {src && (
//           <span className="mb-1 d-inline-flex">
//             <img
//               src={src}
//               alt={text}
//               className=" "
//               style={{ height: "24px", width: "24px" }}
//             />
//           </span>
//         )}
//         <span className="">{text}</span>
//       </NavLink>

//       }
//       {/* {nestedLinks && (
//       <ul className="beforeEffect mb-2 pb-2 border_bottom " style={{ height: "auto",}}>
//         {nestedLinks.map((nestedLink, index) => (
//           <li key={index} className="mb-0 p-0 list-unstyled text-white d-flex" style={{width: "100%"}}>
//             <NavLink to={nestedLink.to} style={{height:"40px"}} className={`w-100 d-flex link ${activeKey === nestedLink.to ? "active" : ""}`}>
//               {nestedLink.text}
//             </NavLink>
//           </li>
//         ))}
//        </ul>
//     )} */}
//     </li>
//   );
// };

// export default NavLinkItem;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.scss";

const NavLinkItem = ({
  to,
  className,
  src,
  text,
  style,
  onClick,
  activeKey,
  nestedLinks,
}) => {
  const navigate = useNavigate();
  return (
    <li className={`mb-1 p-0 ${style}`}>
      <NavLink
        to={to}
        className={`px-2 py-2 w-100 d-flex align-items-center gap-2 text-white rounded shadow-none ${className}`}
        style={{ height: "40px" }}
      >
        {src && (
          <span className="mb-1 d-inline-flex">
            <img
              src={src}
              alt={text}
              className=" "
              style={{ height: "24px", width: "24px" }}
            />
          </span>
        )}
        <span className="">{text}</span>
      </NavLink>

      {/* {nestedLinks && (
      <ul className="beforeEffect mb-2 pb-2 border_bottom " style={{ height: "auto",}}>
        {nestedLinks.map((nestedLink, index) => (
          <li key={index} className="mb-0 p-0 list-unstyled text-white d-flex" style={{width: "100%"}}>
            <NavLink to={nestedLink.to} style={{height:"40px"}} className={`w-100 d-flex link ${activeKey === nestedLink.to ? "active" : ""}`}>
              {nestedLink.text}
            </NavLink>
          </li>
        ))}
       </ul>
    )} */}
    </li>
  );
};

export default NavLinkItem;
