import {NavLink} from "react-router-dom"
import { useLocation } from "react-router-dom"; 
function HorizontalCard(props){
    const formattedHeading = props.heading.replace(/\s+/g, '-').toLowerCase();
    const location = useLocation();
    return(
        <div className="hor-card-main">
            <img src={props.img} alt="" className="hor-card-img"/>
            <div className="hor-sec-div">
            <NavLink className='hor-card-heading' to={`${location.pathname}/${formattedHeading}`}>{props.heading}</NavLink>
            <p className='hor-card-parah'>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>xxxxxxxxxxxxxxx
            </p>

            </div>
        </div>
    );
}
export default HorizontalCard;