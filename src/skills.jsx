import cv from "./assets/cv.png"
import wd from "./assets/wd.png"
import es from "./assets/es.png"
import dsa from "./assets/dsa.png"
import {Fade} from "react-awesome-reveal"
import SkillCard from "./skillCard"

function Skills(){
    return(
        <>
        <section className="skills-main" id="skills">
            <Fade direction='up'>
                <h1>My Skills</h1>
            </Fade>

            {/* <div class="timeline">
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
                </div> */}
            {/* </div> */}
            <div className="skills-up">
            <SkillCard skill="Web Developement"></SkillCard>
            <SkillCard skill="Data Structures and Algorithms"></SkillCard>
            <SkillCard skill="Machine Learning (learning)"></SkillCard>
            </div>
            <div className="lang">
                <Fade direction='up'>
                    <div className="lang-inner">
                        Java
                    </div>
                </Fade>
                <Fade direction='down'>
                <div className="lang-inner">
                    C++
                </div>

                </Fade>
                <Fade direction='up'>
                <div className="lang-inner">
                    C
                </div>
                </Fade>
                <Fade direction='down'>
                <div className="lang-inner">
                    Python
                </div>

                </Fade>
                <Fade direction='up'>
                <div className="lang-inner">
                    HTML
                </div>
                </Fade>
                <Fade direction='down'>
                <div className="lang-inner">
                    CSS
                </div>

                </Fade>
                <Fade direction='up'>
                <div className="lang-inner">
                    JavaScript
                </div>
                </Fade>
                <Fade direction='down'>
                <div className="lang-inner">
                    React
                </div>

                </Fade>
                <Fade direction='up'>
                <div className="lang-inner">
                    Node
                </div>
                </Fade>
                <Fade direction='down'>

                <div className="lang-inner">
                    Express
                </div>
                </Fade>
                <Fade direction='up'>
                <div className="lang-inner">
                    MongoDB
                </div>
                </Fade>
                <Fade direction='down'>
                </Fade>
                <Fade direction='down'>
                <div className="lang-inner">
                    MySQL
                </div>
                </Fade>
                <Fade direction='up'>
                <div className="lang-inner">
                    Flask
                </div>

                </Fade>
            </div>
        </section>

        </>
    )
}

export default Skills