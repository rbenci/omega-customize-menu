/** @format */

import React from "react";

export default function AddPageDirectory({ setList, list }) {
  const handleClick = (e) => {
    e.preventDefault();
    setList([...list, { id: Date.now(), type: "layout", list: [] }]);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      New Sublevel
    </button>
  );
}
