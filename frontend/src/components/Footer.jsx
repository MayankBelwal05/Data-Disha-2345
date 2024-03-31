import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {


  return (

    <div className='footer' >
        <div className='footer-div1' >
            <img src="https://img.freepik.com/free-vector/red-logo-black-background_1195-52.jpg?t=st=1711725699~exp=1711729299~hmac=3192d6ca1dbcfbb168e492c8082dac001e9b7bd003c313e3f23c6e51892efaf8&w=740" alt="logo" />
            <div className='footer-div1-p' >
                <p>At VibeVista, we specialize in turning your events into extraordinary experiences. Our Event Management System is crafted to simplify every aspect of planning, booking, and execution.</p>
            </div>
            <div className='footer-social-icons' >
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className='footer-div2' >
            <h3 className='footer-h3' >Important Links</h3>
            <Link className='footer-div2-links' to='/event'>Events</Link>
            <Link className='footer-div2-links' to='/booking'>Booking</Link>
            <Link className='footer-div2-links' to='/register'>Signup</Link>
            <Link className='footer-div2-links' to='/register'>Login</Link>
            <Link className='footer-div2-links' to='/profile'>Profile</Link>
        </div>
        <div className='footer-div3' >
            <h3 className='footer-h3'>Contact Us</h3>
            <p><span className='footer-div3-span' ><i className="fa-solid fa-envelope"></i></span>info@vibevista.com</p>
            <p><span className='footer-div3-span'><i className="fa-solid fa-phone"></i></span>+91 1234567890</p>
            <p><span className='footer-div3-span'><i className="fa-solid fa-location-dot"></i></span>Kolkata-84, West Bengal</p>
        </div>
        <div className='footer-div4' >
            <h3 className='footer-h3'>Subscribe to our Newsletter</h3>
            <input type="text" placeholder='Enter Email Address' />
            <button>Subscribe</button>
            <p>Copyright &copy; 2024 VibeVista</p>
        </div>
    </div>
  )
}
