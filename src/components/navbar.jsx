import {NavLink, useLocation} from "react-router-dom" 
function Navbar(){
    const location = useLocation();
    const isServicesActive = location.pathname.startsWith('/services');
    return(
        <div className="navbar-main">
            <NavLink activeClassName='active' to="/" className="links">Home</NavLink>
            <NavLink to="/services/yet-to-crop" className={`links ${isServicesActive ? 'active' : ''}`}>Services</NavLink>
            <NavLink activeClassName='active' to="/about" className="links">About</NavLink>
            <NavLink activeClassName='active' to="/contact" className="links">Contact</NavLink>
            <NavLink activeClassName='active' to="/user" className="links">User</NavLink>
        </div>
    );
}

export default Navbar
