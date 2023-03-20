/** @format */

import React from "react";
import SubmitBtn from "./buttons/SubmitBtn";

export default function Header({ list, setShowPopup, createHirarchy }) {
  return (
    <div className="header">
      <div className="header-body">
        <h1 className="important">Create a menu</h1>
        <p>
          Use Add Tag to insert a new page and Add Basket to insert a sublist
        </p>
        <p>Drag and drop to reorder</p>

        <SubmitBtn
          list={list}
          setShowPopup={setShowPopup}
          createHirarchy={createHirarchy}
        />
      </div>
      <hr />
    </div>
  );
}
