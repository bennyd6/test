import cv from "./assets/cv.png"
import wd from "./assets/wd.png"
import es from "./assets/es.png"
import dsa from "./assets/dsa.png"
import {Fade} from "react-awesome-reveal"

function Skills(){
    return(
        <>
        <section className="skills-main" id="skills">
            <Fade direction='up'>
                <h1>My Skills</h1>
            </Fade>
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
            <div className="lang">
                <div className="lang-inner">
                    Java
                </div>
                <div className="lang-inner">
                    C++
                </div>
                <div className="lang-inner">
                    C
                </div>
                <div className="lang-inner">
                    Python
                </div>
                <div className="lang-inner">
                    HTML
                </div>
                <div className="lang-inner">
                    CSS
                </div>
                <div className="lang-inner">
                    JavaScript
                </div>
                <div className="lang-inner">
                    React
                </div>
                <div className="lang-inner">
                    Node
                </div>
                <div className="lang-inner">
                    Express
                </div>
                <div className="lang-inner">
                    MongoDB
                </div>
                <div className="lang-inner">
                    Mongoose
                </div>
                <div className="lang-inner">
                    MySQL
                </div>
                <div className="lang-inner">
                    Flask
                </div>
            </div>
        </section>

        </>
    )
}

export default Skills