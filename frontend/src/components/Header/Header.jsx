import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import DropDownAdmin from "./DropDownAdmin";

// https://codepen.io/emmaadesile/full/gBEGYm

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <nav id="header-navbar">
      <div className="header-nav-wrapper">
        <div className="header-logo">
          <a href="/">
            {" "}
            <div className="header-logo-title">SIMMI AGRAWAL</div>
            <div className="header-logo-subtitle">ART STUDIO</div>
          </a>
        </div>

        <ul>
          <li>
            <a href="/shop">Shop</a>
          </li>
          {/* <li>
              <a href="/blog">Blog</a>
            </li> */}
          <li>
            <a href="/about">About</a>
          </li>

          {/* Admin Links */}
          {userInfo && userInfo.isAdmin && (
            <li>{userInfo && userInfo.isAdmin && <DropDownAdmin />}</li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
