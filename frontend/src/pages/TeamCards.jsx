import React from 'react';
import { Box, Flex, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import revanth from "../assets/teamimage/Revanth.jpg";
import rantu from "../assets/teamimage/Rantu.jpg";
import sonali from "../assets/teamimage/Sonali.jpg";
import mayank from "../assets/teamimage/MayankB.png";
import { ImProfile } from "react-icons/im";

export default function TeamCards() {
    return (

        <Flex flexWrap="wrap" justifyContent="center" marginTop="60px">
            <Card maxW='sm' mx={4} my={2} borderColor="black" borderWidth="1px" borderRadius="lg" flexBasis="300px">
                <CardBody>
                    <Box maxW="240px" maxH="280px" mx="auto" borderRadius='lg' overflow="hidden">
                        <Image
                            src={rantu}
                            alt="rantu"
                            objectFit="contain"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                    <Stack mt='6' spacing='3' textAlign="center">
                        <Heading size='md'>Rantu Bangal</Heading>
                        <Text>
                        I am a dedicated MERN Stack Developer with a strong commitment to building responsive and efficient web applications. 
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter justifyContent="center">
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://www.linkedin.com/in/rantu-bangal-6503a5286/" target='blank'><FaLinkedin size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://github.com/RantuBangal" target='blank'><FaGithub size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://portfolio-six-fawn-55.vercel.app/" target='blank'><ImProfile size={30} /></a>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>


            <Card maxW='sm' mx={4} my={2} borderColor="black" borderWidth="1px" borderRadius="lg" flexBasis="300px">
                <CardBody>
                    <Box maxW="210px" maxH="250px" mx="auto" borderRadius='lg' overflow="hidden">
                        <Image
                            src={mayank}
                            alt="Mayank"
                            objectFit="contain"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                    <Stack mt='6' spacing='3' textAlign="center">
                        <Heading size='md'>Mayank Belwal</Heading>
                        <Text>
                        I am a detailed-oriented and responsible Full Stack Web Developer specializing in MERN ( HTML,CSS, JavaScript,MongoDB, Express.js, React, Node.js)
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter justifyContent="center">
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://in.linkedin.com/in/mayank-belwal-6bb808161" target='blank'><FaLinkedin size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://github.com/MayankBelwal05" target='blank'><FaGithub size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://mayankbelwal05.github.io/" target='blank'><ImProfile size={30} /></a>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>


            <Card maxW='sm' mx={4} my={2} borderColor="black" borderWidth="1px" borderRadius="lg" flexBasis="300px">
                <CardBody>
                    <Box maxW="250px" maxH="280px" mx="auto" borderRadius='lg' overflow="hidden">
                        <Image
                            src={revanth}
                            alt="revanth"
                            objectFit="contain"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                    <Stack mt='6' spacing='3' textAlign="center">
                        <Heading size='md'>Revanth Amamu</Heading>
                        <Text>
                        Dynamic Full Stack Web Developer with expertise in MERN stack and a strong focus on frontend development.
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter justifyContent="center">
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://in.linkedin.com/in/revanthamamu" target='blank'><FaLinkedin size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://github.com/revanth-amamu" target='blank'><FaGithub size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://revanth-amamu.github.io/" target='blank'><ImProfile size={30} /></a>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>


            <Card maxW='sm' mx={4} my={2} borderColor="black" borderWidth="1px" borderRadius="lg" flexBasis="300px">
                <CardBody>
                    <Box maxW="300px" maxH="340px" mx="auto" borderRadius='lg' overflow="hidden">
                        <Image
                            src={sonali}
                            alt="sonali"
                            objectFit="contain"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                    <Stack mt='6' spacing='3' textAlign="center">
                        <Heading size='md'>Sonali Burman</Heading>
                        <Text>
                        Dynamic MERN Full Stack Web Developer with 1200+ hours of coding experience. Proficient in JavaScript, React, Node.js, and MongoDB
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter justifyContent="center">
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://www.linkedin.com/in/sonali-burman-363549261" target='blank'><FaLinkedin size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://github.com/Sonali020200" target='blank'><FaGithub size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://serene-shortbread-6ae9ae.netlify.app/" target='blank'><ImProfile size={30} /></a>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Flex>

    );
}
