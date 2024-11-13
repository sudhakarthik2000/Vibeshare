import { Avatar, Flex, VStack, Box, Button } from "@chakra-ui/react";
import { useState } from "react";

function SuggestedUser({ name, avatar, followers }) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Flex alignItems="center" gap={3}>
          <Avatar src={avatar} name={name} size="md" />
          
          <VStack spacing={0.5} alignItems="flex-start">
            <Box fontSize={12} fontWeight="bold">
              {name}
            </Box>
            <Box fontSize={11} color="gray.500">
              {followers} followers
            </Box>
          </VStack>
        </Flex>

        {/* Adding a gap between user details and the follow/unfollow button */}
        <Box ml={16}>
          <Button
            fontSize={14}
            bg="transparent"
            p={0}
            h="max-content"
            fontWeight="medium"
            color="blue.400"
            cursor="pointer"
            _hover={{ color: "white" }}
            onClick={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </Box>
      </Flex>
    </div>
  );
}

export default SuggestedUser;
