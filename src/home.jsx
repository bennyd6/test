import Navbar from "./navbar";
import mouse from "./assets/Animation.gif"
function Home(){
    return(
        <div className="home-bg">
            <div className="home-up">
                <Navbar></Navbar>
            </div>
            <div className="home-down">
                <h1 className="main-heading">Welcome,<br /> I'm <span>Benny</span></h1>
            </div>
            <div className="home-least">
                <img src={mouse} alt="" />
                {/* <MyLottieAnimation></MyLottieAnimation> */}
            </div>
        </div>
    )
}

export default Home;