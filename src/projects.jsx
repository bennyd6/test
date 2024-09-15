import Card from "./card"
import img from './assets/blob-haikei.png'
import {Fade} from "react-awesome-reveal"
import Gen from './assets/genesis.png'
import Cre from './assets/crexo.png'
import Num from './assets/numbers.png'
import Lev from './assets/Levilyze.png'
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
                <Fade direction='right' delay={400}>
                <Card heading='Crexo' a='https://github.com/bennyd6/crexo' img={Cre}  para="Crexo is a creative platform for storytelling, poetry, and other artistic content, offering a space for creators to share and explore diverse works."></Card>
                </Fade>
                <Fade direction='right' delay={600}>
                <Card heading='Numbers' a='https://github.com/bennyd6/' img={Num} para="Numbers is an innovative project aimed at creating a digital twin of a farm. This virtual model replicates the physical environment of a farm, integrating real-time data from various sensors."></Card>
                </Fade>
                <Fade direction='right' delay={0}>
                <Card heading='Levilyze' a='https://github.com/bennyd6/levilyze' img={Lev} para="Levilyze is a code analysis platform designed to evaluate both the time and memory consumption of code. By allowing users to input their code,helping users understand their code's efficiency."></Card>
                </Fade>
            </div>
        </section>
    )
}
export default Projects