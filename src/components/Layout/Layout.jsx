import { Box, Center, Container, Divider, Flex, Text, Link } from '@chakra-ui/react';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Container maxW="container.lg" p={4}>
        <AppBar />
        <Divider marginBottom={5} />
        <Box as="main">
          <Flex justifyContent="center" alignContent="center">
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
        <Divider marginTop={5} />
        <Box as='footer' p={4}>
          <Flex justifyContent='center' alignItems='center' flexDirection='column'>
          <Text as='p'>©2023 Daniil Popov</Text>
          <Link href="mailto:x6uhrox@gmail.com" _hover={{ color: 'blue' }}>x6uhrox@gmail.com</Link>
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
};

export default Layout;
