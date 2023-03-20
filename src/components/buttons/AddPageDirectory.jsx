/** @format */

import React from "react";

export default function AddPageDirectory({ setList, list }) {
  const handleClick = () => {
    setList([...list, { id: Date.now(), type: "layout", list: [] }]);
  };

  return (
    <button
      type="button"
      className="btn btn-outline-dark btn-lg"
      onClick={handleClick}
    >
      Add Basket
    </button>
  );
}
