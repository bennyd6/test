import {Fade} from "react-awesome-reveal"
function About(){
    return(
        <div className="about-main">
            <div className="abt-parah">
                <Fade direction='left'>
                    <h1 id="about-heading">About me</h1>
                </Fade>
                <Fade direction='right'>
                <p><span>Benny</span> here! Obsessed with computers, I devour web dev, DSA, and competitive programming. Problem-solving fuels me, and I love tackling complex puzzles.  Beyond websites, I explore the frontiers of computer vision and embedded systems, eager to see how tech shapes our world.</p>
                </Fade>
            </div>
        </div>
    )
}


export default About