import {
    Box,
    Button,
    Container,
    FormControl,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    Select
} from "@chakra-ui/react";
import axios from "axios";

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/image/bg.jpg";

const Signup = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [role, setRole] = useState("user"); // Default to "user"
    const [interests, setInterests] = useState("Versatile"); // Default to "Versatile"
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/users/register",
                {
                    username,
                    email,
                    password,
                    age,
                    city,
                    role,
                    interests,
                }
            );
            setShowModal(true);
            setModalMessage("Registration successful");
        } catch (error) {
            setShowModal(true);
            if (error.response && error.response.status === 400) {
                setModalMessage("Email already exists. Please try with another email.");
            } else {
                setModalMessage("Registration failed. Please try again later.");
            }
        }
    };

    const closeModal = () => {
        setShowModal(false);
        if (modalMessage === "Registration successful") {
            navigate("/login"); // Redirect to login page after successful registration
        }
    };

    return (
        <div className="flex h-[38rem] items-center" style={{
            backgroundImage: `url(${backgroundImage})`, // Set the background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            marginTop: "120px",
        }}>
            <Container>
                <Box
                    p={"2rem"}
                    bg={"white"}
                    borderRadius={10}
                    boxShadow={"0px 9px 88px -1px rgba(157,159,119,0.89)"}
                    color="black"
                >
                    <form onSubmit={handleSubmit}>
                        <Heading as={"h1"} color={"green"} textAlign={"center"} mb={4}>
                        Create Account
                        </Heading>
                        <FormControl>
                            <Stack spacing={1} py={2} >
                                <Input
                                    type="text"
                                    placeholder="Username"
                                    border={"1px solid gray"}  color="black"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    border={"1px solid gray"}  color="black"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    border={"1px solid gray"}  color="black"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Input
                                    type="number"
                                    placeholder="Age"
                                    border={"1px solid gray"}  color="black"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <Input
                                    type="text"
                                    placeholder="City"
                                    border={"1px solid gray"}  color="black"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <Select
                                    placeholder="Select Role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="organizer">Organizer</option>
                                    <option value="admin">Admin</option>
                                </Select>
                                <Select
                                    placeholder="Select Interests"
                                    value={interests}
                                    onChange={(e) => setInterests(e.target.value)}
                                >
                                    <option value="Music">Music</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Dance">Dance</option>
                                    <option value="Cultural">Cultural</option>
                                    <option value="Arts">Arts</option>
                                    <option value="Live-Concert">Live Concert</option>
                                    <option value="Versatile">Versatile</option>
                                </Select>
                                <Button type="submit" colorScheme="green" width="full">
                                    Sign Up
                                </Button>
                                <Text textAlign={"center"}>
                                    Already have an account?{" "}
                                    <Text as={Link} to="/login" color="green" fontWeight="bold">
                                        Login
                                    </Text>
                                </Text>
                            </Stack>
                        </FormControl>
                    </form>
                </Box>
                <Modal isOpen={showModal} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Registration Status</ModalHeader>
                        <ModalBody>{modalMessage}</ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" onClick={closeModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Container>
        </div>
    );
};

export default Signup;