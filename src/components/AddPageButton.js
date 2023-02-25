/** @format */

import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../styles/AddPageButton.css";

export const AddPageButton = ({ onAddPage }) => {
  const [addingItem, setAddingItem] = useState(false);
  const [pageName, setPageName] = useState("");
  const [invalidInput, setInvalidInput] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pageName.trim() !== "") {
      onAddPage(pageName);
      setAddingItem(false);
      setPageName("");
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };

  const handleClick = () => {
    setAddingItem(true);
  };

  const handleInputChange = (event) => {
    setPageName(event.target.value);
  };

  const handleCancel = () => {
    setAddingItem(false);
    setPageName("");
  };

  return (
    <div className="addPageContainer">
      {addingItem ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={pageName}
            onChange={handleInputChange}
            required
            className={invalidInput ? "invalidInput" : ""}
          />
          <button type="submit">Add Page</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <AiOutlinePlusCircle size={50} onClick={handleClick} />
      )}
    </div>
  );
};
