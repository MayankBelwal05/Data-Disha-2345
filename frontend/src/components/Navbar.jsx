import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

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
        <img className="logo" src="https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?t=st=1711694376~exp=1711697976~hmac=65938d95ced59d27f281e3c8372388fb919c3f2e78073bcab5a463babe79c65f&w=740" alt="logo" />
        <div className="navbar-links" >
            <Link className="active-link" to='/home'>Home</Link>
            <Link className="active-link" to='/events'>Events</Link>
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