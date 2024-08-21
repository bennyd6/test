import Header from '../components/header.jsx'
import Navbar from '../components/navbar.jsx'
import Rover from '../assets/rover.png'
import HorizontalCard from "../components/HorizontalCard";
import DroneImg from "../assets/drone (1).png"

function RoverandDrones(){
    return(
        <>
        <Header></Header>
        <Navbar></Navbar>
        <div className="randd-bg">
            <HorizontalCard img={Rover} heading='Rover Controls' to='/services/ongoing-crop/roverww3'></HorizontalCard>
            <HorizontalCard img={DroneImg} heading='Drone Controls' to='/services/ongoing-crop/roverww3'></HorizontalCard>
        </div>
        </>
    );
}

export default RoverandDrones;