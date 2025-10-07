import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-section" id="contact-form">
      <iframe
        className="contact-form-iframe"
        width="100%"
        src="https://d990a4be.sibforms.com/serve/MUIFAPnNFNo2tv9EytPh5FxuZWmMVZROehmHEV0WlwU2-pgfzO0aaUzM6600MMFqY3M5fAqueV4tGoqsLh21_hN6RBf3q8a4p09aGuXzPrEX91OFYmu-kzGVW6KIUtRDkubhN3qtKDgwo1jnms6ZtF5Di7qd2oh0PjZUWImnQ33q0kVAot54TSVa-jcmTBwmmPnlR7dlB6XEK0lZ"
        allowFullScreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          border: 0,
        }}
        title="Contact Form"
      ></iframe>
    </div>
  );
};

export default ContactForm;
