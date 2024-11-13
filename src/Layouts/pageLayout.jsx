import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../Sidebar/Sidebar';
// import { useLocation } from 'react-router-dom';
const PageLayout = ({ children, showSidebar }) => {
  // const { pathname } = useLocation();

  return (
    <Flex direction="row" height="100vh">
      {/* Sidebar on the left */}
      {showSidebar && (
        <Box
          w={{ base: '70px', md: '240px' }}
          borderRight="1px solid"
          borderColor="whiteAlpha.300"
          position="relative"
        >
          <Sidebar />
        </Box>
      )}

      {/* Page content on the right */}
      <Box
        flex={1}
        ml={showSidebar ? { base: '70px', md: '240px' } : 0}
        p={4}
        overflow="auto"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
