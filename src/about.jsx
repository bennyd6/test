import {Fade} from "react-awesome-reveal"
function About(){
    return(
        <div className="about-main" id="about">
            <div className="abt-parah">
                <Fade direction='left'>
                    <h1 id="about-heading">About me</h1>
                </Fade>
                <Fade direction='right'>
                <p><span>Benny</span> here! Obsessed with computers, I devour web dev, DSA, and competitiveprogramming. Problem-solving fuels me, and I love tackling complex puzzles.  Beyond websites, I explore the frontiers of Machine Learning and Artificial Intelligence, eager to see how tech shapes our world.</p>
                </Fade>
            </div>
        </div>
    )
}


export default About