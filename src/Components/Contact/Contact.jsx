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
            <img src={location_icon} alt="" /> Adresa: Sos. Pipera, nr. 1/VII, Nord City Tower, Etajul 10,
            Voluntari, Jud. Ilfov
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5711.480688540085!2d26.114425138628416!3d44.48885771668458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b202814ef48aeb%3A0x465b3cdc7e0438b2!2sNord%20City%20Tower%2C%20Voluntari%20077190%2C%20Romania!5e0!3m2!1sen!2snl!4v1759606560818!5m2!1sen!2snl"
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
