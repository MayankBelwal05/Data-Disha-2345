import React from 'react';
import { Flex, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import img1 from "../assets/teamimage/Mayank_image.png";

export default function TeamCards() {
    return (
        <Flex flexWrap="wrap" justifyContent="center" marginTop="60px">
            <Card maxW='sm' mx={4} my={2} borderColor="black" borderWidth="1px" borderRadius="lg" flexBasis="300px">
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' textAlign="center">
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter justifyContent="center">
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <a href=""><FaLinkedin size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href=""><FaGithub size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="#"><FaInstagram size={30} /></a>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm' mx={4} my={2} borderColor="black" borderWidth="1px" borderRadius="lg" flexBasis="300px">
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' textAlign="center">
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter justifyContent="center">
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <a href=""><FaLinkedin size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href=""><FaGithub size={30} /></a>
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="#"><FaInstagram size={30} /></a>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Flex>
    );
}
