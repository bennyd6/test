import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsSubmitted(false); // Reset the flip to show the form during submission

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
        setIsSubmitted(true); // Show success message after form submission
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2>Ping me now!</h2>
      <div className="flip-card">
        <div className={`flip-card-inner ${isSubmitted ? 'flipped' : ''}`}>
          <div className="flip-card-front">
            <form onSubmit={onSubmit}>
              <input type="text" name="name" required placeholder='Enter your name'/>
              <input type="email" name="email" placeholder='Enter your email' required/>
              <textarea name="message" id="msg" required placeholder="Leave your message here"></textarea>
              <button type="submit">Submit Form</button>
            </form>
          </div>
          <div className="flip-card-back">
            <div className={`message ${isSubmitted ? 'success' : ''}`}>{result}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
