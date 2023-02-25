/** @format */

import React from "react";
import { AddPageButton } from "./AddPageButton";
import { PageBox } from "./PageBox";
import "../styles/VerticalBox.css";
import { useState } from "react";
import SubPage from "./SubPage";

function VerticalBox({ name }) {
  const [subPages, setSubPage] = useState([]);

  return (
    <div className="verticalBox">
      <PageBox name={name} />

      {subPages.map((page, index) => {
        return <SubPage key={`${page}-${index}`} name={page} />;
      })}

      <AddPageButton
        onAddPage={(newSubPage) => {
          setSubPage([...subPages, newSubPage]);
        }}
      />
    </div>
  );
}

export default VerticalBox;
