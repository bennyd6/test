import cv from "./assets/cv.png"
import wd from "./assets/wd.png"
import es from "./assets/es.png"
import dsa from "./assets/dsa.png"


function Skills(){
    return(
        <div className="skills-main">
            <h1>My Skills</h1>
            <div class="timeline">
                <div class="container left">
                    <img src={wd} alt=""/>
                    <div class="text-box">
                        <h2>Web Development</h2>
                        <span class="left-arrow"></span>
                    </div>
                </div>
                <div class="container right">
                    <img src={dsa} alt=""/>
                    <div class="text-box">
                        <h2>Data Structures and Algorithms</h2>
                        <span class="right-arrow"></span>
                    </div>
                </div>
                <div class="container left">
                    <img src={cv} alt=""/>
                    <div class="text-box">
                        <h2>Computer Vision</h2>
                        <span class="left-arrow"></span>
                    </div>
                </div>
                <div class="container right">
                    <img src={es} alt=""/>
                    <div class="text-box">
                        <span class="right-arrow"></span>
                        <h2>Embedded Systems</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills