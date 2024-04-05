import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import logo from "../assets/VF.png";

export default function Navbar() {

  const navigate = useNavigate();

  const navigateToLogin = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  const navigateToSignup = (e) => {
    e.preventDefault()
    navigate('/register')
  }

  const navigateToProfile = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="navbar-links" >
            <Link className="active-link" to='/home'>Home</Link>
            <Link className="active-link" to='/event'>Events</Link>
            <Link className="active-link" to='/booking'>Booking</Link>
            <Link className="active-link" to='/about'>About Us</Link>
            <Link className="active-link" to='/contact'>Contact Us</Link>
        </div>
        <div className="navbar-buttons-div" >
            <button className="navbar-buttons" onClick={e => navigateToLogin(e)} >Login</button>
            <button className="navbar-buttons" onClick={e => navigateToSignup(e)} >Signup</button>
            <button className="navbar-buttons" onClick={e => navigateToProfile(e)} >Profile</button>
        </div>

    </div>
  )
}