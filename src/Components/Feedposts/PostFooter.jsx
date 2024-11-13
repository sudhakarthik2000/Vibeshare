import { useState } from "react"
import { Flex , Box , Text, InputGroup, Input, InputRightElement, Button} from "@chakra-ui/react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/logos";

const PostFooter = ({username,caption,}) => {
const [liked,setLiked] = useState(false)
const[likes,setLikes] = useState(800)


const handlelikes = ()=>{
    if(liked){
        setLiked(false);
        setLikes(likes-1)

    }else{
        setLiked(true);
        setLikes(likes+1);
    }
}
  return (
  <>
  <Box mb={5}>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={2}>
    <Box onClick={handlelikes}
    cursor={"pointer"}
    fontSize={18}
    >{!liked? <NotificationsLogo/>:<UnlikeLogo/>}</Box>


    <Box cursor={"pointer"} fontSize={18}>
        <CommentLogo/>
    </Box>
    </Flex>
     <Text fontWeight={600} fontSize="sm">
        {likes} likes
      </Text>
        <Box display="flex" alignItems="center" mt={1}>
        <Text fontWeight={700} fontSize="sm" mr={1}>
        {username}{" "}
        </Text>
        <Text fontWeight={400} fontSize="sm" as="span">
             {caption}
        </Text>
      </Box>
      <Text color="gray" fontSize="sm" mt={2}>
        View all 100 comments

        
      </Text>

      <Flex
      alignItems={"center"}
      gap={2}
      justifyContent={"space-between"}
      w={"full"}
      >
        <InputGroup>
        <Input  variant={"flushed"}  placeholder={"Add a comment........"}/>
        <InputRightElement>
        <Button
        fontSize={14}
        color={"blue.500"}
        fontWeight={500}
        cursor={"pointer"}
        _hover={{color:"white"}}
        bg={"transparent"}
        
        >Post</Button>
        
        </InputRightElement>
        
        </InputGroup>


      </Flex>
      </Box>
  </>
  )
}

export default PostFooter
