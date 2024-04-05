import { Link } from 'react-router-dom';
import { Flex, Box, Input, Button, IconButton, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import './Footer.css';
import logo from "../assets/VF.png";

export default function Footer() {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      className='footer'
      justify="space-around"
      align="start"
      color="black"
      bg="#29b5f6e9"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      textAlign="left"
      direction={isSmallScreen ? "column" : "row"}
    >
      <Box className='footer-div1' w={isSmallScreen ? "100%" : "20%"} textAlign="center">
        <img src={logo} alt="logo" width="150px" height="150px" />
        <Box className='footer-div1-p' pl="20px">
          <p>At VibeVista, we specialize in turning your events into extraordinary experiences. Our Event Management System is crafted to simplify every aspect of planning, booking, and execution.</p>
        </Box>
        <Flex className='footer-social-icons' justify="space-around" gap="15px">
          <IconButton className="social-icon" aria-label="Facebook" icon={<i className="fa-brands fa-facebook"></i>} />
          <IconButton className="social-icon" aria-label="Instagram" icon={<i className="fa-brands fa-instagram"></i>} />
          <IconButton className="social-icon" aria-label="Twitter" icon={<i className="fa-brands fa-twitter"></i>} />
          <IconButton className="social-icon" aria-label="LinkedIn" icon={<i className="fa-brands fa-linkedin"></i>} />
          <IconButton className="social-icon" aria-label="YouTube" icon={<i className="fa-brands fa-youtube"></i>} />
        </Flex>
      </Box>
      <Box className='footer-div2' w={isSmallScreen ? "100%" : "20%"} textAlign={isSmallScreen ? "center" : "left"}>
        <h3 className='footer-h3'>Important Links</h3>
        <Link className='footer-div2-links' to='/event'>Events</Link>
        <Link className='footer-div2-links' to='/booking'>Booking</Link>
        <Link className='footer-div2-links' to='/register'>Signup</Link>
        <Link className='footer-div2-links' to='/login'>Login</Link>
        <Link className='footer-div2-links' to='/profile'>Profile</Link>
      </Box>
      <Box className='footer-div3' w={isSmallScreen ? "100%" : "20%"} textAlign="left">
        <h3 className='footer-h3'>Contact Us</h3>
        <p><span className='footer-div3-span'><i className="fa-solid fa-envelope"></i></span>info@vibevista.com</p>
        <p><span className='footer-div3-span'><i className="fa-solid fa-phone"></i></span>+91 1234567890</p>
        <p><span className='footer-div3-span'><i className="fa-solid fa-location-dot"></i></span>Kolkata-84, West Bengal</p>
      </Box>
      <Box className='footer-div4' w={isSmallScreen ? "100%" : "20%"} textAlign="left">
        <h3 className='footer-h3'>Subscribe to our Newsletter</h3>
        <Input type="text" placeholder='Enter Email Address' mb="10px" />
        <Button bg="black" color="white" borderRadius="5px" mr="10px">Subscribe</Button>
        <p>Copyright &copy; 2024 VibeVista</p>
      </Box>
    </Flex>
  )
}
