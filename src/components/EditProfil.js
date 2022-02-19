import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Account from "../components/Account";

import { userDetails } from "../actions/log";

const EditProfil = () => {
  const dataUser = useSelector((state) => state.user);
  const firstName = dataUser.firstName;
  const lastName = dataUser.lastName;

  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);
  const showContent = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <div className="header">
      <h1>
        Welcome back !<br />
        {firstName} {lastName}
      </h1>
      <button onClick={showContent} className="edit-button">
        Edit Name
      </button>
      {isClicked && (
        <form className="editProfilHidden">
          <div className="input">
            <input
              required
              className="editProfilInput"
              type="text"
              id="firstName"
              placeholder={firstName}
            />
            <input
              required
              className="editProfilInput"
              type="text"
              id="lastName"
              placeholder={lastName}
            />
          </div>
          <div className="button">
            <button className="editButton form-button" type="submit">
              Save
            </button>
            <button className="editButton form-button" type="button">
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProfil;
