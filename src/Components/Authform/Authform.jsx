import { Box, VStack ,Flex,Text} from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Login from './Login';
import Signup from './Signup';
import GoogleAuth from './GoogleAuth';

const MotionBox = motion(Box);


const Authform = () => {
    const [isLogin, setIsLogin] = useState(true);


  

  

    return (
        <>
        
      
        <MotionBox
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="lg"
            backdropFilter="blur(15px)"
            backgroundColor="rgba(0, 0, 0, 0.6)"
            padding={8}
            maxWidth="sm"
            margin="auto"
            marginTop={16}
            boxShadow="xl"
            width="full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <VStack spacing={6}>
<Text
      fontSize="4xl" 
      fontWeight="bold"
      bgGradient="linear(to-r, pink.400, purple.500)"
      bgClip="text"
      textAlign="center"
      letterSpacing="wider"
      color="transparent"
      position="relative"
      animation="fadeIn 2s ease-in-out, pulse 2s infinite"
    >
      VibeShare
      <style >{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </Text>                
            
              {isLogin ? <Login/> : <Signup/>}

                {/* {or text} */}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                </Flex>

            <GoogleAuth/>
            </VStack>
        </MotionBox>

        <Box border="1px solid rgba(255, 255, 255, 0.2)"    borderRadius="lg" padding={5}    backgroundColor="rgba(0, 0, 0, 0.6)">
            <Flex alignItems={"center"} justifyContent={"center"}>
             <Box mx={2} fontSize={14}>
                {isLogin?"Dont have an account?": "Already have an account :"}

             </Box>

             <Box  onClick={()=> setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin?"Sign Up":"Log in"}

             </Box>
                
            </Flex>


        </Box>


        </>
    );
};

export default Authform;
