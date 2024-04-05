
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import img1 from "../assets/about/events.jpg";

const PaymentPage = () => {
  const [billingCycle, setBillingCycle] = useState('annual');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBillingCycleChange = (e) => {
    setBillingCycle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const form = e.target;
    const amount = form.elements['amount'].value;
    const cardNumber = form.elements['cardNumber'].value;
    const expiry = form.elements['expiry'].value;
    const cvc = form.elements['cvc'].value;

    if (amount && cardNumber && expiry && cvc) {
      
      onOpen();
    } else {
     
      alert('Please fill all the fields');
    }
  };

  return (
    <Box
      backgroundImage="url('https://img.freepik.com/free-vector/flat-background-knowledge-day-celebration_23-2150610658.jpg?w=900')" 
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="80px"
    >
      <Box
        width="400px"
        padding="20px"
        border="1px solid #ccc"
        borderRadius="5px"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
        border-radius="20px"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input type="text" name="amount" placeholder="Enter Amount" />
            </FormControl>
            <FormControl>
              <FormLabel>Card number</FormLabel>
              <Input type="text" name="cardNumber" placeholder="1234 1234 1234 1234" />
            </FormControl>
            <FormControl>
              <FormLabel>MM / YY</FormLabel>
              <Input type="text" name="expiry" placeholder="MM / YY" />
            </FormControl>
            <FormControl>
              <FormLabel>CVC</FormLabel>
              <Input type="text" name="cvc" placeholder="CVC" />
            </FormControl>
            
            <Button type="submit" colorScheme="blue" size="lg" width="100%">
              Pay Now
            </Button>
          </Stack>
        </form>
        
        
        <AlertDialog isOpen={isOpen} onClose={onClose} motionPreset="scale">
          <AlertDialogOverlay />
          <AlertDialogContent bg="green.500" color="white">
            <AlertDialogHeader fontSize="2xl" fontWeight="bold" textAlign="center">
              Payment successful 
            </AlertDialogHeader> 
            <AlertDialogBody textAlign="center">
              <Icon as={MdCheckCircle} w={20} h={20} color="white" />
              <Box mt={2} fontWeight="bold" fontSize="xl">Thank you !</Box>
              <Box mt={2}>Payment is successful.</Box>
            </AlertDialogBody>
            <AlertDialogFooter justifyContent="center">
              <Button colorScheme="whiteAlpha" onClick={onClose}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </Box>
  );
};

export default PaymentPage;
