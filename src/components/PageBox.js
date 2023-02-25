/** @format */

import "../styles/PageBox.css";
import React from "react";

export const PageBox = ({ name, id }) => {
  return <div id={id} style={{fontWeight: 'bold'}} className="pageBoxContainer">{name}</div>;
};
