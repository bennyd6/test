import Card from "./card"
import img from './assets/blob-haikei.png'
import {Fade} from "react-awesome-reveal"
import Gg from './assets/geogaurd.png'
import Gen from './assets/genesis.png'
import Cre from './assets/crexo.png'
import Num from './assets/numbers.png'
import Lev from './assets/Levilyze.png'
import SP from './assets/swiftpost.png'
import PC from './assets/pc.png'
import p from './assets/preg.png'
import r from './assets/rai.png'
import tsm from './assets/image.png'
function Projects(){
    return(
        <section className='projects-main' id="projects">
            <div className="projects-up">
                <Fade>

                <h1 className='projects-heading'>My Work</h1>
                </Fade>
            </div>
            <div className="projects-down">
                <Fade direction='right' delay={0}>
                <Card heading='Genesis' a='https://github.com/bennyd6/genesis' img={Gen} para="Genesis is a comprehensive agricultural technology platform integrating crop prediction, analysis, and drone/rover controls for enhanced farming efficiency."></Card>
                </Fade>
                <Fade direction='right' delay={200}>
                <Card heading='Crexo' a='https://github.com/bennyd6/crexo' img={Cre}  para="Crexo is a creative platform for storytelling, poetry, and other artistic content, offering a space for creators to share and explore diverse works."></Card>
                </Fade>
                <Fade direction='right' delay={400}>
                <Card heading='Levilyze' a='https://github.com/bennyd6/levilyze' img={Lev} para="Levilyze is a code analysis platform designed to evaluate both the time and memory consumption of code. By allowing users to input their code,helping users understand their code's efficiency."></Card>
                </Fade>
                <Fade direction='right' delay={0}>
                <Card heading='Numbers' a='https://github.com/bennyd6/' img={Num} para="Numbers is an innovative project aimed at creating a digital twin of a farm. This virtual model replicates the physical environment of a farm, integrating real-time data from various sensors."></Card>
                </Fade>
                <Fade direction='right' delay={200}>
                <Card heading='SwiftPost' a='https://github.com/bennyd6/' img={SP} para="SwiftPost is a project focused on the post department, featuring four dashboards tailored for staff, admin, manager, and user roles. Each dashboard serves specific functionalities within the postal system."></Card>
                </Fade>
                <Fade direction='right' delay={400}>
                <Card heading='GeoGaurd' a='https://github.com/bennyd6/geogaurd-frontend' img={Gg} para="A solution leveraging React for an intuitive frontend, Node.js for backend operations, and machine learning models to predict natural disasters like floods and landslides using satellite imagery and relevant data patterns."></Card>
                </Fade>
                <Fade direction='right' delay={0}>
                <Card heading='Photography Club-CMREC' a='https://github.com/bennyd6' img={PC} para="Bquilt a responsive React website for the CMREC Photography Club, featuring 20+ custom components to showcase photography and events."></Card>
                </Fade>
                <Fade direction='right' delay={200}>
                <Card heading='Motherly' a='https://github.com/bennyd6/motherly' img={p} para="Developed Motherly, a pregnancy support platform using the MERN stack, Gemini API and Twilio. The app empowers expectant mothers with a dashboard, chatbot, and real-time monitoring for better healthcare management."></Card>
                </Fade>
                <Fade direction='right' delay={400}>
                <Card heading='Globemate' a='https://github.com/bennyd6/roamai' img={r} para="A MERN stack trip planner integrating the Gemini API for itinerary generation, allowing users to book cars and hotels. Features four dashboards: User, Car, Hotel, and Admin for seamless management."></Card>
                </Fade>
                <Fade direction='right' delay={0}>
                <Card heading='The Second Mind' a='https://github.com/bennyd6/the-second-mind' img={tsm} para="A Gemini AI based research Assistant which consists of 6+1 agents for best response the query."></Card>
                </Fade>
                {/* <Fade direction='right' delay={400}>
                <Card heading='GeoGaurd' a='https://github.com/bennyd6/geogaurd-frontend' img={Gg} para="A solution leveraging React for an intuitive frontend, Node.js for backend operations, and machine learning models to predict natural disasters like floods and landslides using satellite imagery and relevant data patterns."></Card>
                </Fade> */}
            </div>
        </section>
    )
}
export default Projects