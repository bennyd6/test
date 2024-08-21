import Header from '../components/header.jsx'
import Navbar from '../components/navbar.jsx'
import './home.css'
import { NavLink } from "react-router-dom"
import { Fade } from 'react-awesome-reveal';

function Home() {
  
  return (
    <>
      <Header/>
      <Navbar/>
        <div className="home-bg">
        <Fade direction="up">
        <div className="home-inner-one">
          <h1>
            Empowering Farmers with Cutting-Edge Agricultural Technology
          </h1>
          <p>
            Transforming agriculture through innovative technology, empowering farmers with data-driven insights and precision tools for optimized yields and sustainable practices.
          </p>
          <NavLink to='/user'> <button>Get Started</button></NavLink>
        </div>
        </Fade>
        </div>
        <div className="home-bg-two-ult">
        <Fade duration={3000}>
      <div className="home-bg-two">
          
        <div class="intro-content">
          <div class="intro-overview">
            <h3>Overview of the Project</h3>
            <p>Genesis is a cutting-edge agricultural technology platform designed to empower farmers with innovative tools and insights. Our platform provides a comprehensive suite of services, including crop prediction, crop analysis, real-time field statistics, and advanced controls for rovers and drones. By leveraging the latest advancements in IoT, AI, and machine learning, Genesis helps farmers optimize their operations, increase productivity, and make informed decisions.</p>
          </div>
          <div class="intro-mission-vision">
            <div class="mission">
              <h3>Mission</h3>
              <p>Our mission is to revolutionize agriculture by providing farmers with intelligent, data-driven solutions that enhance productivity, sustainability, and profitability. We strive to create a future where farming is more efficient, environmentally friendly, and technologically advanced.</p>
            </div>
            <div class="vision">
              <h3>Vision</h3>
              <p>Our vision is to become the global leader in agricultural technology, transforming the way farming is done across the world. We aim to empower every farmer with the tools and knowledge they need to succeed in the modern agricultural landscape, ensuring food security and sustainability for future generations.</p>
            </div>
          </div>
        </div>
      </div>
        </Fade>
        </div>
      <div className="home-bg-three">
        <div class="home-bg-three-heading">
          <h1>We Offer:</h1>
        </div>
        <div class="grid-container">
          <div class="grid-item crop-prediction">

          <div class="overlay">
          <h3>Crop Prediction</h3>
                This is a description of the Rovers service. It provides detailed information about the functionality and features of the rovers used in the fields.
            </div>
          </div>
          <div class="grid-item crop-statistics">
          <div class="overlay">
          <h3>Field Statistics</h3>
                This is a description of the Rovers service. It provides detailed information about the functionality and features of the rovers used in the fields.
            </div>

          </div>
          
          <div class="grid-item scan-plant">
          <div class="overlay">
          <h3>Scan Plant</h3>
                This is a description of the Rovers service. It provides detailed information about the functionality and features of the rovers used in the fields.
            </div>

          </div>
          <div class="grid-item drone-service">
          <div class="overlay">
          <h3>Drone Service</h3>
                This is a description of the Rovers service. It provides detailed information about the functionality and features of the rovers used in the fields.
            </div>

          </div>
          <div class="grid-item yield-prediction">
          <div class="overlay">
            <h3>Yield Prediction</h3>
                This is a description of the Rovers service. It provides detailed information about the functionality and features of the rovers used in the fields.
            </div>

          </div>
          <div class="grid-item rovers">
          <div class="overlay">
            <h3>Rovers</h3>
                This is a description of the Rovers service. It provides detailed information about the functionality and features of the rovers used in the fields.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home 
