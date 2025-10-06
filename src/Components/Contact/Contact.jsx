import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact-form">
      <div className="contact-col contact-form-col">
        <iframe
          width="100%"
          src="https://d990a4be.sibforms.com/serve/MUIFAPnNFNo2tv9EytPh5FxuZWmMVZROehmHEV0WlwU2-pgfzO0aaUzM6600MMFqY3M5fAqueV4tGoqsLh21_hN6RBf3q8a4p09aGuXzPrEX91OFYmu-kzGVW6KIUtRDkubhN3qtKDgwo1jnms6ZtF5Di7qd2oh0PjZUWImnQ33q0kVAot54TSVa-jcmTBwmmPnlR7dlB6XEK0lZ"
          allowFullScreen
          style={{ border: 0 }}
          title="Contact Form"
        ></iframe>
      </div>
      <div className="contact-col">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5711.480688540085!2d26.114425138628416!3d44.48885771668458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b202814ef48aeb%3A0x465b3cdc7e0438b2!2sNord%20City%20Tower%2C%20Voluntari%20077190%2C%20Romania!5e0!3m2!1sen!2snl!4v1759606560818!5m2!1sen!2snl"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
