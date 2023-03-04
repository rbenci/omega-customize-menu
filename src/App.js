/** @format */

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";
import { deleteNestedItems, Navbar } from "./components/Navbar";
import { createContext, useState } from "react";
import PopupWindow from "./components/PopupWindow";
import { ToastContainer } from "react-toastify";

export const PageContext = createContext();

function App() {
  const [pageStructure, setPageStructure] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [mainPages, setMainPages] = useState([]);

  const handleSubmitIntention = (e) => {
    e.preventDefault();
    // console.log(pageStructure);
    setShowPopup(true);
  };

  return (
    <>
      <PageContext.Provider
        value={{
          pageStructure: pageStructure,
          setPageStructure: setPageStructure,
        }}
      >
        <div className={"app"}>
          <header className="header">
            <h1>Create a menu</h1>
            <h3>
              Use the add icon to begin adding pages, you can add subpages to
              any page you create
            </h3>
            <button className={"submitButton"} onClick={handleSubmitIntention}>
              Submit
            </button>
          </header>

          <Navbar mainPages={mainPages} setMainPages={setMainPages} />
          <PopupWindow
            showPopup={showPopup}
            pageStructure={pageStructure}
            mainPages={mainPages}
            setMainPages={setMainPages}
            setShowPopup={setShowPopup}
          />
        </div>
      </PageContext.Provider>

      <ToastContainer />
    </>
  );
}

export default App;
