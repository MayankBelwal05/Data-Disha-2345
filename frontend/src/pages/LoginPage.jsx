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
    useToast,
} from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
// import { authLinLout } from "../redux/authSlice";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/image/logi.jpg";



const Login = () => {
    //   const [username, setUserName] = useState("");
    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const navigate = useNavigate();
    const toast = useToast();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(` ${password}  , ${email}`);
        try {
            const response = await axios.post(
                "http://localhost:8080/users/login",
                {
                    email,
                    password,
                }
            );

            console.log(response);

            

            if (response.status === 200) {
                const token = response.data.token;
                const user = response.data.user;
                
                console.log(token);
                console.log(user);
              
                localStorage.setItem("token", token); // Set token in local storage
                localStorage.setItem("user", JSON.stringify(user));
                
                setShowModal(true);
                setModalMessage("Login successful");
                // dispatch(authLinLout(true));
                toast({
                    title: "You have sucessfully logged in",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
                setTimeout(() => {
                    navigate("/");
                }, 1000);

            } else {
                console.error("Login failed");
                toast({
                    title: "Login failed",
                    description: "Please try again",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            setShowModal(true);
            setModalMessage("Please register yourself");
            console.error("Error:", error);
        }
    };
    const closeModal = () => {
        setShowModal(false);
        if (modalMessage === "Login successful") {
            navigate("/home");
        }
    };
    return (
        <div className="bg-[#b0becf] flex h-[38rem] items-center" style={{
            backgroundImage: `url(${backgroundImage})`, // Set the background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            marginTop: "100px"
        }}>
            <Container>
                <Box
                    p={"2rem"}
                    bg={"rgba(255,255,255,0.20)"} // Set the background color
                    borderRadius={10}
                    boxShadow={"0px 9px 88px -1px rgba(157,159,119,0.89)"}
                    style={{ backdropFilter: 'blur(5px)' }}
                >
                    <form onSubmit={handleSubmit}>
                        <Heading as={"h1"} color={"white"} textAlign={"center"} mb={4}>
                            Login
                        </Heading>
                        <FormControl>
                            <Stack spacing={5} py={2}>
                                <Input
                                    type="email"
                                    color="white"
                                    placeholder="Email"
                                    _placeholder={{ color: 'white' }}
                                    border={"1px solid white"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    _placeholder={{ color: 'white' }}
                                    color="white"
                                    border={"1px solid white"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button type="submit" colorScheme="green" width="full">
                                    Login
                                </Button>

                                <Text textAlign={"center"} color="black">
                                    Do not have an account{" "}
                                    <Text as={Link} to="/signup" color="black" fontWeight="bold">
                                        Signup
                                    </Text>
                                </Text>
                            </Stack>
                        </FormControl>
                    </form>
                </Box>
                <Modal isOpen={showModal} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Login Status</ModalHeader>
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

export default Login;

