import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { userDetails, updateProfile } from "../actions/user.action";

const EditProfil = () => {
  const dataUser = useSelector((state) => state.user);
  //placeholder
  const first = dataUser.firstName;
  const last = dataUser.lastName;
  const token = dataUser.token;
  //value
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);

  const handleChangeFirst = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLast = (e) => {
    setLastName(e.target.value);
  };

  const showContent = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  const update = (e) => {
    e.preventDefault();
    dispatch(updateProfile(firstName, lastName));
    setIsClicked(false);
  };

  return (
    <div className="header">
      <h1>
        Welcome back !<br />
        {first} {last}
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
              value={firstName}
              id="firstName"
              onChange={handleChangeFirst}
              placeholder={first}
            />
            <input
              required
              className="editProfilInput"
              type="text"
              onChange={handleChangeLast}
              value={lastName}
              id="lastName"
              placeholder={last}
            />
          </div>
          <div className="button">
            <button
              className="editButton form-button"
              type="submit"
              onClick={update}
            >
              Save
            </button>
            <button
              className="editButton form-button"
              type="button"
              onClick={showContent}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProfil;
