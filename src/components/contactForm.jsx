import React, { useState } from "react";
import "../styles/components/contactForm.scss";

export function ContactForm({ sendTo }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
    sentTo: sendTo,
  });

  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let err = false;
    // Object.keys(value).forEach((it) => {
    //   if (value[it]?.length <= 0) {
    //     err = true;
    //     setError(true);
    //   }
    //   if (it === "email") {
    //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     if (!emailRegex.test(value[it])) {
    //       err = true;
    //       setError(true);
    //     }
    //   }
    // });

    if (!err) {
      const { data } = await fetch(
        "https://playlistorchard.netlify.app/.netlify/functions/sendContactMessage",
        {
          method: "POST",
          body: JSON.stringify(value),
        }
      );
      console.log(data);
    }
  }

  function handleChange(name, inputValue) {
    setError(false);
    if (name !== "message" && inputValue.length <= 70) {
      setValue({ ...value, [name]: inputValue });
    } else {
      if (inputValue.length <= 300) {
        setValue({ ...value, [name]: inputValue });
      }
    }
  }
  return (
    <div className="contactForm-container">
      <form className="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name" className="contactForm-label">
          Name
          <input
            type="text"
            id="name"
            className="contactForm-input"
            value={value.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </label>
        <label htmlFor="email" className="contactForm-label">
          Email
          <input
            type="email"
            id="email"
            className="contactForm-input"
            value={value.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </label>
        <label htmlFor="message" className="contactForm-label">
          Message
          <textarea
            id="message"
            className="contactForm-input contactForm-textArea"
            value={value.message}
            rows={5}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </label>
        <button className="contactForm-button" type="submit">
          send
        </button>
        {error && <p className="contactForm-error">An error has occurred</p>}
      </form>
    </div>
  );
}
