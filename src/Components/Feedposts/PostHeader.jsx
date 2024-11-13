import { Flex ,Box,Text} from "@chakra-ui/react";
import { Avatar,  } from '@chakra-ui/react'
const PostHeader = ({username,avatar}) => {
  return (
 <>
 <Flex  justifyContent={"space-between"} alignItems={"center"} w={"full"}>
<Flex alignItems={"center"} gap={2}>
    <Avatar src={avatar}   alt=" My Profile Pic"  size={"sm"} mb={1}/>
    <Flex fontSize={12} fontWeight={"bold"} gap={2}>
    {username}
    <Box color={"gray.500"}>.1d</Box>
    </Flex>
    </Flex>
    <Box
    cursor={"pointer"}
    >
        <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}} transition={"0.2s ease-in-out"}>
            Unfollow
        </Text>
    </Box>

 </Flex>
 
 </>
  )
}

export default PostHeader;
