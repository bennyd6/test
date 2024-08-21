import Header from '../components/header.jsx'
import Navbar from '../components/navbar.jsx'
import Card from '../components/card.jsx'
import {NavLink} from "react-router-dom" 
import cardImg from '../assets/location.png'


function Services() {
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
            <Card img={cardImg} heading="Crop Suggestion"/>
        </div>
      </div>
    </>
  )
}

export default Services