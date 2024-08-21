import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom';
function Header(){
    return(
        <>
            <div className="heading-div">
                <div className="heading-div-inner">
                    <NavLink to='/'>

                    <img src={logo} alt="" className="logo" />
                    </NavLink>
                    <h1 className="heading-div-heading">
                        GENESIS
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Header