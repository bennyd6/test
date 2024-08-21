import Header from '../components/header.jsx'
import Navbar from '../components/navbar.jsx'
import './contact.css'

function Contact() {
    return (
    <>
      <Header/>
      <Navbar/>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: info@genesis.com</p>
        <p>Phone: +123-456-7890</p>
        <form>
          <input type="text" name="name" placeholder='Enter your name' />
          <input type="email" name="email" placeholder='Enter your email'/>
          <textarea name="message" id="msg" placeholder='Type your message'></textarea>
          <button>Send</button>
        </form>
      </section>
    </>
  )
}

export default Contact 
