/** @format */
import "../styles/Navbar.css";
import React, { useState } from "react";

import { AddPageButton } from "./AddPageButton";
import { PageBox } from "./PageBox";

export const Navbar = () => {
  const [mainPages, setMainPages] = useState(["Page 1", "Page 2", "Page 3"]);
  const [subPages, setSubPages] = useState([]);

  const [pages, setPages] = useState([
    { name: "Page 1", sub: [] },
    { name: "Page 2", sub: [] },
    { name: "Page 3", sub: [] },
  ]);

  const deleteMainPage = (name) => {
    const updatedPages = mainPages.filter((page) => page.name !== name);
    setMainPages(updatedPages);
  };

//   const addSubPage = (newSubPage) => setSubPages([...subPages, newSubPage]);
  const addSubPage = (newSubPage, parent) => {
	const page = {
		name: newSubPage, 
		sub: []
	}

	findParent(parent, page)
	
}

const findParent = (parent, page)=>{
	for(let i=0; i<pages.length; i++){
		if (pages[i].name == parent){
			const updatedPages = [...pages]
			// console.log(page);
			// console.log(updatedPages[i].sub.push("aaa"));
			// updatedPages[i].sub.push(page)
			// setPages(updatedPages);
		}
	}
  }

  const delSubPage = (name) => {
	const updatedPages = subPages.filter((page) => page !== name);
	setSubPages(updatedPages);
  }

  return (
    <div className="navbarContainer">
      <div className="horizontalPageList">
        {pages.map((page, index) => {
          return (
            <PageBox
              key={`${page.name}-${index}`}
              name={page.name}
              level={0}
              handleDelete={deleteMainPage}
              handleAddSub={addSubPage}
			  handleDelSub={delSubPage}
              subPages={pages[index].sub}
            />
          );
        })}
      </div>
      <AddPageButton
        onAddPage={(newPage) => {
			const page = {
				name: newPage, 
				sub: []
			}
          setPages([...pages, page]);
        }}
      />
    </div>
  );
};
