import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import DropDownAdmin from "./DropDownAdmin";

const HeaderShop = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const location = useLocation();

  return (
    <nav id="header-navbar">
      <div className="header-nav-wrapper">
        <div className="header-logo">
          <a href="/">
            <div className="header-logo-title">XX</div>
            <div className="header-logo-subtitle">YY</div>
          </a>
        </div>

        <ul>
          {!(location.pathname === "/shop") && (
            <li>
              <a href="/shop">Products</a>
            </li>
          )}
          <li>
            <a href="/shop/cart">
              Cart
              {cartItems.length > 0 && (
                <>{cartItems.reduce((a, c) => a + c.qty, 0)}</>
              )}
            </a>
          </li>
          {userInfo ? (
            <li>
              <a href="/shop/profile">Profile</a>
            </li>
          ) : (
            <li>
              <a href="/shop/login">Login</a>
            </li>
          )}
          {/* <li>
              <a href="/blog">Blog</a>
            </li> */}
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            {/* Admin Links */}
            {userInfo && userInfo.isAdmin && <DropDownAdmin />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderShop;
