import mouse from "./assets/Animation.gif"
import { Fade } from 'react-awesome-reveal';
import GH from './assets/github.png'
import li from './assets/linkedin.png'
import { Link } from 'react-scroll';
import em from './assets/email.png'

function Home() {
  return (
    <section className="home-bg" id="home">
      <div className="home-up">
      </div>
      <div className="home-down">
        <Fade direction="down">
          <h1 className="main-heading">Welcome,<br /> I'm <span>Benny</span></h1>
        </Fade>
        <div className="home-down-one">
          <Fade direction="left">
            <a href="https://github.com/bennyd6" target="__blank"><img src={GH} alt="" /></a>
          </Fade>
          <Fade direction="up">
            <a href="https://linkedin.com/in/benny-bandarupalli-bb3561263" target="__blank"><img src={li} alt="" /></a>
          </Fade>
          <Fade direction="right">
          <a href="mailto:cadheshbenny@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={em} alt="Email" />
          </a>
          </Fade>
        </div>
      </div>
      <div className="home-least">
      <Link to="about" className="scroll-link" smooth={true} duration={500}><img src={mouse} alt="" /></Link>
      </div>
    </section>
  );
}

export default Home;
