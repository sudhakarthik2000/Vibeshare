import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Suggestedheader = () => {
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" w="full" gap={8}>
        <Flex alignItems="center" gap={5}>
          <Avatar name="Karthik_26" size={'lg'} src="/Profile.jpg" height={8} width={8}/>
          <Text fontSize={15} fontWeight="bold">Karthik_Reddy_2626</Text>
        </Flex>
        <Link
          as={RouterLink}
          to="/authen"
          fontSize={15}
          fontWeight="medium"
          color="blue.400"
          style={{ textDecoration: "none" }}
          cursor="pointer"
        >
          Logout
        </Link>
      </Flex>
    </div>
  );
};

export default Suggestedheader;
