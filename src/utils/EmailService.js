/** @format */

import emailjs from "@emailjs/browser";


const config = {
  SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
  PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
};

export const sendEmail = (content) => {
  console.log(config);

  return emailjs.sendForm(
    config.SERVICE_ID,
    config.TEMPLATE_ID,
    content,
    config.PUBLIC_KEY
  );
};
