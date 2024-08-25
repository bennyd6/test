import './App.css';
import Home from './home'
import About from './about';
import Skills from './skills'
import ShootingStars from './shootingStars';
import Projects from './projects';
import Contact from './contact';
import Navbar from './navbar';

function App() {
  
    return (
      <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills/>
      {/* <ShootingStars></ShootingStars> */}
      <Projects></Projects>
      <Contact></Contact>
      </>
    );
  }
  
  export default App;
  