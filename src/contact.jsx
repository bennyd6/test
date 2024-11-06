import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsLoading(true);
    setIsSubmitted(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "9368c00e-3540-441c-9c04-fcce5b674635");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thanks for your message!");
        setIsSubmitted(true);
        setIsLoading(false);
        event.target.reset();
      } else {
        setResult(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2>Ping me now!</h2>
      <form
        onSubmit={onSubmit}
        className={isLoading ? "form-loading" : isSubmitted ? "form-success" : ""}
      >
        {isLoading ? (
          <div className="loading-spinner"></div>
        ) : isSubmitted ? (
          <div className="success-message">Thanks for your message!</div>
        ) : (
          <>
            <input type="text" name="name" required placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" required />
            <textarea name="message" id="msg" required placeholder="Leave your message here"></textarea>
            <button type="submit" disabled={isLoading}>Submit Form</button>
          </>
        )}
      </form>
    </div>
  );
}
