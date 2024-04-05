import { Link, useNavigate } from "react-router-dom";
import { Box, Flex, Button, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/VF.png";

export default function Navbar() {
  const navigate = useNavigate();

  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const navigateToSignup = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const navigateToProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  console.log(localStorage.getItem("token") != null);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      height="80px"
      bgColor="#29B6F6"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      position="fixed"
      top="0"
      zIndex="1000"
      width="100%"
      px={{ base: "4", md: "8" }}
    >
      <Box>
        <img
          className="logo"
          src={logo}
          alt="logo"
          width="80px"
          height="80px"
        />
      </Box>
      <Flex
        as="div"
        align="center"
        gap="40px"
        justify={isSmallScreen ? "center" : "space-between"}
        display={!isSmallScreen ? "flex" : "none"}
      >
        <Link className="hover:text-white font-bold" to="/">
          Home
        </Link>
        <Link className="hover:text-white font-bold" to="/events">
          Events
        </Link>
        <Link className="hover:text-white font-bold" to="/booking">
          Booking
        </Link>
        <Link className="hover:text-white font-bold" to="/about">
          About Us
        </Link>
        <Link className="hover:text-white font-bold" to="/contact">
          Contact Us
        </Link>
      </Flex>
      {isSmallScreen && (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            bgColor="#29B6F6"
            _hover={{
              bgColor: "#0388f4",
            }}
          />
          <MenuList>
            <MenuItem onClick={(e) => navigateToLogin(e)}>Login</MenuItem>
            <MenuItem onClick={(e) => navigateToSignup(e)}>Signup</MenuItem>
            {
              localStorage.getItem("token") !== null && (
                <MenuItem onClick={(e) => navigateToProfile(e)}>Profile</MenuItem>
              )
            }

            <MenuItem>
              <Link className="hover:text-white font-bold" to="/home">
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="hover:text-white font-bold" to="/event">
                Events
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="hover:text-white font-bold" to="/booking">
                Booking
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="hover:text-white font-bold" to="/about">
                About Us
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="hover:text-white font-bold" to="/contact">
                Contact Us
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
      <Flex
        as="div"
        align="center"
        gap="10px"
        display={!isSmallScreen ? "flex" : "none"}
      >
      
        {
          localStorage.getItem("token") !== null ? (
            <Button
              className="navbar-buttons"
              onClick={(e) => navigateToProfile(e)}
              height="40px"
              fontSize="16px"
              bgColor="#29B6F6"
              borderRadius="7px"
              px="10px"
              color="black"
              border="1px solid black"
              fontWeight="500"
              _hover={{
                bgColor: "#0388f4",
                color: "white",
                border: "1px solid white",
              }}
              display={{ base: "none", md: "flex" }}
            >
              Profile
            </Button>
          ):<>
            <Button
          className="navbar-buttons"
          onClick={(e) => navigateToLogin(e)}
          height="40px"
          fontSize="16px"
          bgColor="#29B6F6"
          borderRadius="7px"
          px="10px"
          color="black"
          border="1px solid black"
          fontWeight="500"
          _hover={{
            bgColor: "#0388f4",
            color: "white",
            border: "1px solid white",
          }}
          display={{ base: "none", md: "flex" }}
        >
          Login
        </Button>
        <Button
          className="navbar-buttons"
          onClick={(e) => navigateToSignup(e)}
          height="40px"
          fontSize="16px"
          bgColor="#29B6F6"
          borderRadius="7px"
          px="10px"
          color="black"
          border="1px solid black"
          fontWeight="500"
          _hover={{
            bgColor: "#0388f4",
            color: "white",
            border: "1px solid white",
          }}
          display={{ base: "none", md: "flex" }}
        >
          Signup
        </Button>
          </>
        }

      </Flex>
    </Flex>
  );
}
