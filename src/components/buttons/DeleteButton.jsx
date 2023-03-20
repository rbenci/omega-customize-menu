/** @format */

import React from "react";
import { handleDelete } from "../../utils/DeleteFunc";
import { TiDeleteOutline } from "react-icons/ti";

export default function DeleteButton({ list, item, setList }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleDelete(list, item, setList);
  };

  return (
    // <button
    //   type="button"
    //   className="btn btn-close btn-sm delete-btn"
    //   onClick={handleClick}
    // ></button>
    <TiDeleteOutline
      onClick={handleClick}
      className="delete-btn"
      size={20}
      style={{ cursor: "pointer" }}
    />
  );
}
