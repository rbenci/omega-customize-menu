/** @format */
import "../styles/Navbar.css";
import React, { createContext, useState } from "react";

import { AddPageButton } from "./AddPageButton";
import { PageBox } from "./PageBox";

export const PageContext = createContext();

export const Navbar = () => {
  const [mainPages, setMainPages] = useState(["Page 1", "Page 2", "Page 3"]);
  const [pageStructure, setPageStructure] = useState({
    "Page 1": [],
    "Page 2": [],
    "Page 3": [],
  });

  const deleteMainPage = (name) => {
    const updatedPages = mainPages.filter((page) => page !== name);
    setMainPages(updatedPages);

    const newPageStructure = { ...pageStructure };
    delete newPageStructure[name];

    setPageStructure(newPageStructure);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(pageStructure);
  };

  return (
    <PageContext.Provider value={[pageStructure, setPageStructure]}>
      <div className="navbarContainer">
        <div className="horizontalPageList">
          {mainPages.map((page, index) => {
            return (
              <PageBox
                key={`${page}-${index}`}
                id={`${page}-${index}`}
                name={page}
                level={0}
                handleDelete={deleteMainPage}
              />
            );
          })}
        </div>
        <AddPageButton
          onAddPage={(newPage) => {
            setMainPages([...mainPages, newPage]);

            const newPageStructure = { ...pageStructure };
            newPageStructure[newPage] = [];
            setPageStructure(newPageStructure);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </PageContext.Provider>
  );
};
