import Header from '../components/header.jsx'
import Navbar from '../components/navbar.jsx'
import HorizontalCard from "../components/HorizontalCard";
import CVImg from '../assets/sprout.png'
import '../components/HorizontalCard.css'
import StatsImg from '../assets/diagram.png'
import ypImg from '../assets/yp2.png'

function CropAnalysis(){
    return(
        <>
        <Header></Header>
        <Navbar></Navbar>
        <div className="services-bg ca-bg">
        <HorizontalCard img={CVImg} heading='Scan Plant'></HorizontalCard>
        <HorizontalCard img={StatsImg} heading='Field Statistics'></HorizontalCard>
        <HorizontalCard img={ypImg} heading='Yeild Prediction'></HorizontalCard>
        </div>
        </>
    );
}

export default CropAnalysis;