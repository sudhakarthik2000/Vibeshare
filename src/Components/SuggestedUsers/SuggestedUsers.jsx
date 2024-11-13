import { Box, Flex, Text, VStack ,Link} from "@chakra-ui/react"
import Suggestedheader from "./Suggestedheader"
import SuggestedUser from "./SuggestedUser"


const SuggestedUsers = () => {
  return (
    <div>
         <VStack py={7} px={6} gap={8}>
        <Suggestedheader />

        <Flex alignItems="center" justifyContent="space-between" w="full">
          <Box fontSize={12} fontWeight="bold" color="gray.400">
            Suggested for you
          </Box>
          <Text fontSize={15} fontWeight="bold">See All</Text>
        </Flex>
      <SuggestedUser  name='Ryan Florence'  followers={1300} avatar='https://bit.ly/ryan-florence'/>
      <SuggestedUser    name='Dan Abrahmov'  followers={1200} avatar='https://bit.ly/dan-abramov'/>
      <SuggestedUser  name='Ryan Mishra'  followers={800} avatar='https://bit.ly/kent-c-dodds'/>
      <SuggestedUser    name='Kent Dodds'  followers={700} avatar='https://bit.ly/code-beast'/>
      <SuggestedUser  name='Prosper Otemuyiwa'  followers={2000} avatar='https://bit.ly/prosper-baba'/>
      <SuggestedUser    name='Segun Adebayo'  followers={300} avatar='https://bit.ly/sage-adebayo'/>
      <SuggestedUser  name='Christian Nwamba'  followers={1800} avatar='https://bit.ly/kent-c-dodds'/>
      

      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
      @ 2024 Built By{" "}
      <Link href="https://github.com/sudhakarthik2000/DashBoardTask.git" target="_blank" color={'blue.500'} fontSize={14}>
      Karthik_Reddy_2626
      </Link>
        
      </Box>

      </VStack>
      
    </div>
  )
}

export default SuggestedUsers
