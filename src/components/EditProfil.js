import React from "react";

const EditProfil = () => {
  return (
    <form className="">
      <div className="input">
        <input
          required
          className="editProfilInput"
          type="text"
          id="firstName"
        />
        <input required className="editProfilInput" type="text" id="lastName" />
      </div>
      <div className="button">
        <button className="edit-button form-button" type="submit">
          Save
        </button>
        <button className="edit-button form-button" type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfil;
