import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9368c00e-3540-441c-9c04-fcce5b674635");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsSubmitted(true); // Mark the form as submitted
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2>Ping me now!</h2>
      {!isSubmitted ? (
        <div className="form-container">
          <form className={`form ${result === "Sending...." ? "sending" : ""}`} onSubmit={onSubmit}>
            <input type="text" name="name" required placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" required />
            <textarea name="message" id="msg" required placeholder="Leave your message here"></textarea>
            <button type="submit">Submit Form</button>
          </form>
        </div>
      ) : (
        <div className="success-message">
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}
