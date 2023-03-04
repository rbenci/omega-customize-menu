/** @format */

import emailjs from "@emailjs/browser";

const config = {
  SERVICE_ID: "service_2hliuob",
  TEMPLATE_ID: "template_w7esapc",
  PUBLIC_KEY: "V9tMB1op_2eyQ9H-d",
};

export const sendEmail = (content) => {

  return emailjs.sendForm(
    config.SERVICE_ID,
    config.TEMPLATE_ID,
    content,
    config.PUBLIC_KEY,
  );
};



