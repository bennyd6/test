import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Card(props) {
  const formattedHeading = props.heading.replace(/\s+/g, '-').toLowerCase();
  const location = useLocation();
  
  return (
    <div className="card-main">
      <img src={props.img} alt="" className="card-img"/>
      <NavLink className='card-heading' to={`${location.pathname}/${formattedHeading}`}>{props.heading}</NavLink>
      <p className='card-parah'>
        xxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxx
      </p>
    </div>
  );
}

export default Card;
