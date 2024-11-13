
import { Container,Flex,Box } from "@chakra-ui/react"
import Feedposts from "../../Components/Feedposts/Feedposts"
import SuggestedUsers from "../../Components/SuggestedUsers/SuggestedUsers"

const Homepage = () => {
  return (
<Container maxW={"container.1g"}>
  <Flex gap={20}>
    <Box flex={2} py={10} >
    < Feedposts/>
    </Box>
    <Box flex={4} mr={20}display={{base:"none",lg:"block"}}maxW={"300px"} >
  <SuggestedUsers/>
    </Box>
  </Flex>

</Container>
  )
}

export default Homepage


