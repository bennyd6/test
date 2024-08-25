import mouse from "./assets/Animation.gif"
import { Fade } from 'react-awesome-reveal';
import GH from './assets/github.png'
import li from './assets/linkedin.png'

function Home() {
  return (
    <section className="home-bg" id="home">
      <div className="home-up">
        {/* <Navbar /> */}
      </div>
      <div className="home-down">
        <Fade direction="down">
          <h1 className="main-heading">Welcome,<br /> I'm <span>Benny</span></h1>
        </Fade>
        <div className="home-down-one">
          <a href="https://github.com/bennyd6"><img src={GH} alt="" /></a>
          <a href="www.linkedin.com/in/benny-bandarupalli-bb3561263"><img src={li} alt="" /></a>
        </div>
      </div>
      <div className="home-least">
        <img src={mouse} alt="" />
        {/* <MyLottieAnimation /> */}
      </div>
    </section>
  );
}

export default Home;
