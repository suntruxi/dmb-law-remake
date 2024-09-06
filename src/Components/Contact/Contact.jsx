import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Contact <img src={msg_icon} alt="" />
        </h3>
        <p>
          Suntem aici pentru tine! Contactează-ne pentru a discuta cum putem să
          îți oferim cele mai bune soluții.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> Email: office@dmblaw.ro
          </li>
          <li>
            <img src={phone_icon} alt="" /> Telefon: +40727101633
          </li>
          <li>
            <img src={location_icon} alt="" /> Adresa: Strada Piotr Ilici
            Ceaikovski 3 Bucuresti
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.302643872464!2d26.080492215333575!3d44.44033777910288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4731ae447b%3A0x8f9844c309a61138!2sStrada%20Piotr%20Ilici%20Ceaikovski%203%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1626208871903!5m2!1sen!2sro"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
