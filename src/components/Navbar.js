/** @format */
import "../styles/Navbar.css";
import React, { useState } from "react";
import { PageBox } from "./PageBox";

import { AddPageButton } from "./AddPageButton";
import VerticalBox from "./VerticalBox";

export const Navbar = () => {
  const [mainPages, setMainPages] = useState(["Page 1", "Page 2", "Page 3"]);

  return (
    <div className="navbarContainer">
      <div className="horizontalPageList">
	  {mainPages.map((page, index) => {
        return (
          <VerticalBox key={`${page}-${index}`} name={page} />
        );
      })}
      </div>
      <AddPageButton
        onAddPage={(newPage) => {
          setMainPages([...mainPages, newPage]);
        }}
      />
    </div>
  );
};
