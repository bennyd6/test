import Card from "./card"
import img from './assets/blob-haikei.png'
import {Fade} from "react-awesome-reveal"
import Gen from './assets/genesis.png'
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
                <Card heading='Crexo' a='https://github.com/bennyd6/crexo' img={img}  para="Crexo is a creative platform for storytelling, poetry, and other artistic content, offering a space for creators to share and explore diverse works."></Card>
                </Fade>
                <Fade direction='right' delay={600}>
                <Card heading='Crexo' a='https://github.com/bennyd6/genesis' img={img} para="Genesis is a comprehensive agricultural technology platform integrating crop prediction, analysis, and drone/rover controls for enhanced farming efficiency."></Card>
                </Fade>
            </div>
        </section>
    )
}
export default Projects