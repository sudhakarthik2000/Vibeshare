import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Tooltip,
    useDisclosure,
  } from "@chakra-ui/react";
  import { SearchLogo } from "../../assets/constants";
  import useSearchUser from "../../hooks/useSearchUser";
  import { useRef } from "react";
  import SuggestedUser from "../SuggestedUsers/SuggestedUser";
  
  const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchRef = useRef(null);
    const { user, isLoading, getUserProfile, setUser } = useSearchUser();
  
    const handleSearchUser = (e) => {
      e.preventDefault();
      console.log('Search initiated with:', searchRef.current.value);
      getUserProfile(searchRef.current.value);
    };
  
    console.log('User Data:', user);
  
    return (
      <>
        <Tooltip
          hasArrow
          label={"Search"}
          placement='right'
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            onClick={onOpen}
          >
            <SearchLogo />
            <Box display={{ base: "none", md: "block" }}>Search</Box>
          </Flex>
        </Tooltip>
  
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
          <ModalOverlay />
          <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
            <ModalHeader>Search user</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSearchUser}>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input placeholder='karthik_reddy_2626' ref={searchRef} />
                </FormControl>
  
                <Flex w={"full"} justifyContent={"flex-end"}>
                  <Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
                    Search
                  </Button>
                </Flex>
              </form>
              {/* Debug log to check if SuggestedUser is rendering */}
              {user ? (
                <div>
                  <p>Rendering SuggestedUser with user data:</p>
                  <SuggestedUser user={user} setUser={setUser} />
                </div>
              ) : (
                <p>No user data to display</p>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default Search;
  