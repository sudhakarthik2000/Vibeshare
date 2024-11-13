import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../../Components/Profile/ProfileHeader"
import ProfileTabs from "../../../Components/Profile/ProfileTabs"
import ProfilePosts from "../../../Components/Profile/ProfilePosts"


const ProfilePage = () => {
  return (
    <div>
      <Container maxW={"container.lg"} py={5}>
        <Flex
        py={10}
        px={5}
        pl={{base:4,md:10}}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
        >
            <ProfileHeader/>

        </Flex>
        <Flex
        px={{base:2,sm:4}}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
        
        
        >
            <ProfileTabs/>
            <ProfilePosts/>

        </Flex>
      </Container>
    </div>
  )
}

export default ProfilePage
