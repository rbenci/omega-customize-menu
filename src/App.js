/** @format */

import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Directory from "./components/Directory";
import AddNameButton from "./components/buttons/AddNameButton";
import AddPageDirectory from "./components/buttons/AddPageDirectory";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopupWindow from "./components/PopupWindow";
import { createHirarchy } from "./utils/CreateHtml";
import DeleteButton from "./components/buttons/DeleteButton";
import { initialList } from "./startups/CreateInitList";

const sortableOptions = {
  animation: 200,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared",
};

function App() {
  // initalize the default list from startup/CreateInitList.js
  const [list, setList] = useState(initialList);

  const [showPopup, setShowPopup] = useState(false);
  const [html, setHtml] = useState("");

  // hide the scroll bar when the popup is open
  document.body.style.overflow = showPopup ? 'hidden' : 'auto';

  const handleCreateHirarchy = (list) => {
    // console.log(list);
    const html = createHirarchy(list);
    setHtml(html);
  };

  return (
    <>
      <div className="appContainer">
		<Header
		  list={list}
		  setShowPopup={setShowPopup}
		  createHirarchy={handleCreateHirarchy}
		/>
		<div className="listContainer">
		  <ReactSortable
			list={list}
			setList={setList}
			style={{
			  padding: 10,
			  background: "#D3D3D3",
			  minHeight: "300px",
			}}
			className="layout"
			{...sortableOptions}
		  >
			{list.map((item, index) => {
			  if (item.type === "layout") {
				return (
				  <div key={item.id} className="basket">
					<Directory
					  {...item}
					  indexs={[index]}
					  setList={setList}
					  bigList={list}
					  sortableOptions={sortableOptions}
					/>
					<DeleteButton list={list} setList={setList} item={item} />
				  </div>
				);
			  }
			  return (
				<Item
				  key={item.id}
				  item={item}
				  setList={setList}
				  list={list}
				  bigList={list}
				/>
			  );
			})}
		  </ReactSortable>
		</div>
		<div className="addButtonsContainer">
		  <AddNameButton setList={setList} list={list} />
		  <AddPageDirectory setList={setList} list={list} />
		</div>
	  </div>
      <PopupWindow
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        html={html}
        setList={setList}
      />
      <ToastContainer />
    </>
  );
}

export default App;
