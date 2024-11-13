import { Flex, Container, Box, Image, VStack } from "@chakra-ui/react";
import Authform from "../Components/Authform/Authform";

const AuthenPage = () => {
    return (
        <Flex minHeight="100vh" justifyContent="center" alignItems="center" px={4}>
            <Container maxWidth="container.md" padding={0}>
                <Flex justifyContent="center" alignItems="center">
                    {/* Left hand side */}
                    <Box display={{ base: "none", md: "block" }} mr={10}>
                        <Image src="/Authen.jpg" height={560} alt="Phone image" />
                    </Box>

                    {/* Right hand side */}
                    <VStack spacing={4} align="stretch">
                        <Authform />
                        <Box textAlign="center" mb={4}>Get Started</Box>
                        {/* <Flex gap={5} justifyContent="center" mb={4}>
                            <Image src="/Google.png" height={10} alt="Google Play Store" />
                            <Image src="/micro.png" height={10} alt="Microsoft" />
                        </Flex> */}
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    );
}

export default AuthenPage;
