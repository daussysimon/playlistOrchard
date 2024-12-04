import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function ContactForm() {
  const [value, setValue] = useState({
    name: "",
    emai: "",
    message: "",
  });

  const [error, setSerror] = useState(false);

  async function handleSubmit() {
    value.forEach((it) => {
      if (value.length <= 0) {
        setSerror(true);
      }
    });

    if (!error) {
      const { data } = await fetch(
        "http://localhost:8888/.netlify/functions/sendContactMessage",
        {
          method: "POST",
          body: JSON.stringify({ ...value }),
        }
      );

      console.log(data);
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
            onChange={(e) =>
              setValue((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
        <label htmlFor="email" className="contactForm-label">
          Email
          <input
            type="email"
            id="email"
            className="contactForm-input"
            value={value.email}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>
        <label htmlFor="message" className="contactForm-label">
          Message
          <textarea
            id="message"
            className="contactForm-input contactForm-textArea"
            value={value.message}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </label>
        <ReCAPTCHA
          sitekey="6LcugpAqAAAAAJZnxApuuMzy9EoOgsxYLrUWl6sx"
          onChange={(val) => console.log(val)}
        />
        <button className="contactForm-button" type="submit">
          Submit
        </button>
        {error && <p className="contactForm-error">An error has occurred</p>}
      </form>
    </div>
  );
}
