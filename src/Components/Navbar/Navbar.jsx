import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src="/burgerMenu.jpeg"
          alt=""
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
        />
        <Link to="/">
          <img src="/StreamTube.png" alt="" className="logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src="/search.png" alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        {/* <img src="/upload.png" alt="" /> */}
        {/* <img src="/more.png" alt="" /> */}
        {/* <img src="/notification.png" alt="" /> */}
        <img src="/user_profile.jpg" alt="" className="user-icon" />
      </div>
    </nav>
  );
};
