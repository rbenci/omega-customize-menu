/** @format */

import Popup from "reactjs-popup";
import { createHierarchy } from "../utils/CreateHierarchy";
import React, { useRef } from "react";
import { sendEmail } from "../utils/EmailService";
import { useState } from "react";
import { deleteNestedItems } from "./Navbar";
import { toast } from "react-toastify";

function PopupWindow({
  showPopup,
  pageStructure,
  setMainPages,
  mainPages,
  setShowPopup,
}) {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleCancelPopup = () => {
    setShowPopup(false);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    // reject if no page is added
    if (mainPages.length === 0) {
      toast.warning("Please add some pages");
      handleCancelPopup();
      return;
    }

    setSubmitted((prevSubmit) => !prevSubmit);

    setShowPopup(false);
    deleteNestedItems(mainPages);
    setMainPages([]);
    setSubmitted((prevSubmit) => !prevSubmit);

    // console.log(form.current);
    // console.log(createHierarchy(pageStructure, mainPages, true));

    sendEmail(form.current)
      .then((res) => {
        res.status == "200"
          ? toast.success("Congrats! Email has been sent.")
          : toast.error("Hmm...Something went wrong.");
      })
      .catch((err) => {
        toast.error("Hmm...Something went wrong: " + err);
      });
  };

  return (
    <Popup open={showPopup}>
      <div className="popupContainer">
        <div className="popupContent">
          <h2 className="popupTitle">
            Are you sure you want to submit the following navigation structure?
          </h2>
          <div
            className="hierarchy"
            dangerouslySetInnerHTML={{
              __html: createHierarchy(pageStructure, mainPages),
            }}
          ></div>

          <form ref={form} onSubmit={handleSendEmail}>
            <input
              type="hidden"
              name="message"
              value={createHierarchy(pageStructure, mainPages, true)}
            />
            <p className="popupMessage">Pressing "Submit" will notify Omega.</p>
            <div className="popupButtons">
              {/* Change cancel btn to div to prevent form onSubmit */}
              <div className="popupButton cancel" onClick={handleCancelPopup}>
                Cancel
              </div>

              {submitted ? (
                <div className="popupButton submit">
                  <div className="spinner"></div>
                </div>
              ) : (
                <input className="popupButton submit" type="submit" />
              )}
            </div>
          </form>
        </div>
      </div>
    </Popup>
  );
}

export default PopupWindow;
