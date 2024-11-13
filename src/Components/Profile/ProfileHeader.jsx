import {
  Avatar,
  AvatarGroup,
  Flex,
  Text,
  VStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import EditProfile from "./EditProfile";

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
        alignItems={{ base: "center", sm: "flex-start" }}
      >
        {/* Avatar Group */}
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf="center"
          alignSelf="flex-start"
          mx="auto"
        >
          <Avatar name="Karthik" src="/Profile.jpg" alt="My Profile" />
        </AvatarGroup>

        {/* Username on the top right of the Avatar */}
        <VStack alignItems="flex-start" gap={2} mx="auto" flex={1}>
          <Flex
            gap={4}
            direction="column"
            alignItems={{ base: "center", sm: "flex-start" }}
            w="full"
            justifyContent="flex-start"
          >
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              fontWeight="bold"
              alignSelf={{ base: "center", sm: "flex-start" }}
            >
              Karthik_Reddy_2626
            </Text>
            <Flex gap={5} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"gray.400"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
                onClick={onOpen}
              >
                Edit Profile
              </Button>
            </Flex>
          </Flex>

          <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                5
              </Text>
              Posts
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                1200
              </Text>
              Followers
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                480
              </Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Karthik_Reddy_2626
            </Text>
          </Flex>

          <Flex direction="column" alignItems="flex-start">
            <Text fontSize="sm">𝐊𝐚𝐫𝐦𝐚🔄</Text>
            <Text fontSize="sm">𝐓𝐫𝐮𝐬𝐭 𝐭𝐡𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬💥</Text>
            <Text fontSize="sm">|| 𝐋𝐢𝐟𝐞 𝐢𝐬 𝐟𝐮𝐥𝐥 𝐨𝐟 𝐦𝐢𝐫𝐚𝐜𝐥𝐞𝐬 𝐚𝐧𝐝 𝐬𝐮𝐫𝐩𝐫𝐢𝐬𝐞𝐬  ||</Text>
        <Text   fontSize="sm">|| 𝐇𝐲𝐝𝐞𝐫𝐚𝐛𝐚𝐝 📍||</Text>
          </Flex>
        </VStack>
        {isOpen && <EditProfile isOpen = {isOpen} onClose={onClose}/> }

      </Flex>
    </div>
  );
};
export default ProfileHeader;
