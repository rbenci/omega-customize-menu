/** @format */

import React from "react";
import Popup from "reactjs-popup";
import { toast } from "react-toastify";
import { sendEmail } from "../utils/EmailService";

export default function PopupWindow({
  showPopup,
  setShowPopup,
  html,
  setList,
}) {
  const form = React.useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();
    console.log("form", form.current);
    sendEmail(form.current)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Email sent successfully");
        }
        setShowPopup((prev) => !prev);
        setList([]);
      })
      .catch((err) => {
        toast.error("Error sending email ", err);
        setShowPopup((prev) => !prev);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowPopup((prev) => !prev);
  };

  return (
    <Popup open={showPopup}>
      <div className="popupContainer">
        <div className="popupContent">
          <h2 className="popupTitle">
            Are you sure you want to submit the following navigation structure?
          </h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />

          <form ref={form} onSubmit={handleSendEmail}>
            <input type="hidden" name="message" value={html} />
            <div className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </div>
            <input
              type="submit"
              className="btn btn-primary  ms-3"
              value="Send"
            />
          </form>
        </div>
      </div>
    </Popup>
  );
}
