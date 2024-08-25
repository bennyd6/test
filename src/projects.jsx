import Card from "./card"
import img from './assets/blob-haikei.png'
import {Fade} from "react-awesome-reveal"
function Projects(){
    return(
        <div className='projects-main'>
            <div className="projects-up">
                <Fade direction='up'>

                <h1 className='projects-heading'>My Work</h1>
                </Fade>
            </div>
            <div className="projects-down">
                <Card heading='Genesis' a='https://github.com/bennyd6/genesis' img={img} para="Genesis is a comprehensive agricultural technology platform integrating crop prediction, analysis, and drone/rover controls for enhanced farming efficiency."></Card>
                <Card heading='Crexo' a='https://github.com/bennyd6/crexo' img={img} para="Crexo is a creative platform for storytelling, poetry, and other artistic content, offering a space for creators to share and explore diverse works."></Card>
                <Card heading='Crexo' a='https://github.com/bennyd6/genesis' img={img} para="Genesis is a comprehensive agricultural technology platform integrating crop prediction, analysis, and drone/rover controls for enhanced farming efficiency."></Card>
            </div>
        </div>
    )
}
export default Projects