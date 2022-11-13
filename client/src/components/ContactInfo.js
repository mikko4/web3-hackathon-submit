import React from "react";

function ContactInfo({ name, email, image }) {
  const mailVar = "mailto:" + email;
  const altVar = "Photo of" + name;
  return (
    <div>
      <img className="contact-image" src={image} alt={altVar} />
      <div className="name-container">{name}</div>
      <div className="email-container">
        <a href={mailVar}>{email}</a>
      </div>
    </div>
  );
}

export default ContactInfo;
