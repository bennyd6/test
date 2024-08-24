import github from './assets/code.jpg'
function Card(props){
    return(
        <>
        <div className="card-main">
            <div className="card-one">
                <img src={props.img} alt="" />
            </div>
            <div className="card-two">
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
            </div>
            <br />
            <div className="card-three">
                <div className="git-outer">
                    <a href={props.a}  target="_blank"><img src={github} alt="" /></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card