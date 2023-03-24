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

  const [userEmail, setUserEmail] = React.useState("");
  const [userCompany, setUserCompany] = React.useState("");

  // console.log(html);
  const handleSendEmail = (e) => {
    e.preventDefault();
    console.log("form", form.current);


    if (!userEmail.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!userCompany.trim()) {
      toast.error("Please enter your company");
      return;
    }

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
    <div className={`${showPopup ? "popupContainer" : ""}`}>
      <Popup
        open={showPopup}
        onClose={handleCancel}
        contentStyle={{ overflowY: "scroll", margin: "10px auto" }}
      >
        <div className="popupContent">
          <h2 className="popupTitle">
            Are you sure you want to submit the following navigation structure?
          </h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />

          <form ref={form} onSubmit={handleSendEmail}>
            <input type="hidden" name="message" value={html} />
            <div className="input-group mb-3">
              <label htmlFor="email" className="input-group-text">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
              />

              <label htmlFor="userCompany" className="input-group-text">
                Company
              </label>
              <input
                className="form-control"
                type="text"
                name="company"
                value={userCompany}
                onChange={(e) => setUserCompany(e.target.value)}
                placeholder="Enter your company"
              />
            </div>

            <div className="popupButtons">
              <div className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </div>
              <input
                type="submit"
                className="btn btn-primary  ms-3"
                value="Send"
              />
            </div>
          </form>
        </div>
      </Popup>
    </div>
  );
}
