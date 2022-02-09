import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import argentBantLogo from "../img/argentBankLogo.png";
//import { LOGOUT } from 'constant/actions';

const Banner = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBantLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div className="loggedIn">
        <div className="user-loggedIn">
          <i className="fa fa-user-circle fa-1x"></i>
          <p></p>
        </div>
        <Link to="/" className="main-nav-item">
          <i className="fa fa-sign-out fa-1x"></i>
          <p>Sign Out</p>
        </Link>
      </div>

      <div className="loggedOut">
        <Link to="/signin" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </Link>
      </div>
    </nav>
  );
};

export default Banner;
