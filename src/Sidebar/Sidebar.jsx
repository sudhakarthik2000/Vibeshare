import { CreatePostLogo, NotificationsLogo, SearchLogo } from '../assets/logos';
import { Flex, Box, Link, Text, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { Avatar } from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';

function Sidebar() {
  const sidebarItems = [
    {
      icon: <AiFillHome />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
      action: () => console.log("Search Clicked"),
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications',
      action: () => console.log("Notifications Clicked"),
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
      action: () => console.log("create Clicked"),
      link: '/create',
    },
    {
      icon: <Avatar size={"sm"} name='My Profile' src="/Profile.jpg" />,
      text: "Profile",
      link: "/Karthik_Reddy__26",
    }
  ];

  return (
    <Box
      height="100%"
      py={8}
      px={{ base: 2, md: 4 }}
      position="relative"
      overflow="hidden"
    >
      <Flex direction="column" gap={10} width="full" height="full" align="center">
        <Link
          to="/"
          as={RouterLink}
          display={{ base: 'none', md: 'block' }}
          cursor="pointer"
        >
          {/* title name */}
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-r, pink.400, purple.500)"
            bgClip="text"
            textAlign="center"
            letterSpacing="wider"
            color="transparent"
            position="relative"
            animation="fadeIn 2s ease-in-out, pulse 2s infinite"
          >
            VibeShare
            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes pulse {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.05);
                }
                100% {
                  transform: scale(1);
                }
              }
            `}</style>
          </Text>
        </Link>
        <Link
          to="/"
          as={RouterLink}
          display={{ base: 'block', md: 'none' }}
          cursor="pointer"
          borderRadius={6}
          _hover={{
            bg: 'whiteAlpha.200'
          }}
          w={{ base: 10 }}
          p={2}
        >
          <Avatar src="/img1.png" alt=" My Profile Pic" size={"sm"} />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"} width="full">
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement='right'
              ml={1}
              openDelay={500}
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                onClick={item.action}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={"Logout"}
          placement='right'
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
          color={"black"}
        >
          <Link
            display={"flex"}
            to={"/authen"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut style={{ color: "white" }} />
            <Box display={{ base: "none", md: "block" }} color="white">
              Logout
            </Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Sidebar;























