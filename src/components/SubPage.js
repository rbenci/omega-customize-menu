/** @format */

import React from "react";

function SubPage({ id, name }) {
  return (
    <div id={id} className="pageBoxContainer" >
      {name}
    </div>
  );
}

export default SubPage;
