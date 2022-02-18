import React from "react";
import { Link } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";
import argentBantLogo from "../img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutProfil } from "../actions/log";
import User from "../pages/User";
import { isEmpty } from "./Utils";
//import { LOGOUT } from 'constant/actions';

const Banner = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const signOut = (event) => {
    event.preventDefault();
    dispatch(logoutProfil());
  };

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
      {!user.logged ? (
        <div className="loggedIn">
          <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
          </Link>
        </div>
      ) : (
        <div className="loggedOut">
          <div className="user-loggedIn">
            <i className="fa fa-user-circle fa-1x"></i>
            <p> </p>
          </div>
          <Link className="main-nav-item" onClick={signOut} to="/">
            <i className="fa fa-sign-out fa-1x"></i>
            <p>Sign Out</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Banner;
