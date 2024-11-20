import './App.css';
import Home from './home'
import About from './about';
import Skills from './skills'
import ShootingStars from './shootingStars';
import Projects from './projects';
import Contact from './contact';
import Navbar from './navbar';
import Footer from './footer';
import Logo from './Logo';
import {Fade} from 'react-awesome-reveal';
function App() {
  
    return (
      <>
      {/* <Fade direction='right'> */}
        {/* <Logo></Logo> */}
        <Navbar></Navbar>
      {/* </Fade> */}
      <Home></Home>
      <About></About>
      <Skills/>
      {/* <ShootingStars></ShootingStars> */}
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      </>
    );
  }
  
  export default App;
  