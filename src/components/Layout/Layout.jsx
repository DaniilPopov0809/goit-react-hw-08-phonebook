import {
  Box,
  Center,
  Divider,
  Flex,
  Text,
  Link,
} from '@chakra-ui/react';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="stretch"
      minHeight="100vh"
      flexDirection="column"
    >
      <Box as="main" flex="1">
        <AppBar />
        <Divider marginBottom={5} />
        <Flex justifyContent="center" alignContent="center" flex="1">
          <Center>
            <Suspense
              fallback={
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue"
                  size="lg"
                />
              }
            >
              <Outlet />
            </Suspense>
          </Center>
        </Flex>
      </Box>
      <Divider />
      <Box as="footer" p={4}>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text as="p">©2023 Daniil Popov</Text>
          <Link href="mailto:x6uhrox@gmail.com" _hover={{ color: 'blue' }}>
            x6uhrox@gmail.com
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Layout;
