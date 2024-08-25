import {Fade} from 'react-awesome-reveal'
function Contact() {
    return (
    <>
      <section className="contact-section">
        <Fade direction='up'>
        <h2>Ping me now!</h2>
        </Fade>
        <Fade direction='right'>
        <form>
          <input type="text" name="name" placeholder='Enter your name' />
          <input type="email" name="email" placeholder='Enter your email'/>
          <textarea name="message" id="msg" placeholder='Type your message'></textarea>
          <button>Send</button>
        </form>
        </Fade>
      </section>
    </>
  )
}

export default Contact 
