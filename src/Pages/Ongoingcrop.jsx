import Header from '../components/header.jsx'
import Navbar from '../components/navbar.jsx'
import Card from '../components/card.jsx'
import {NavLink} from "react-router-dom" 
import droneImg from '../assets/drone.png'
import growthImg from '../assets/growth.png'

function Ongoingcrop() {
    return (
    <>
      <Header/>
      <Navbar/>
      <div className='services-bg'>
        <div className='services-bg-upper'>
        <NavLink className={({ isActive }) => isActive ? 'links sl activeserv' : 'links sl'} to='/services/yet-to-crop'>
            Yet to Crop?
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'links sr activeserv' : 'links sr'} to='/services/ongoing-crop'>
            Ongoing Crop
        </NavLink>
        </div>
        <div className='services-bg-inner'>
            <Card img={growthImg} heading="Crop Analysis"/>
            <Card img={droneImg} heading="Rover and Drones"/>
        </div>
      </div>
    </>
  )
}

export default Ongoingcrop 
