import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
    <Heading as="h1" textAlign="center" fontSize="6xl">
      Phone
      <Text as="span" color="blue">
        Book
      </Text>
      </Heading>
      <Heading as="h2" textAlign="center" fontSize="xl">
       your simple app for storing contacts. Please{' '}
      <Link to={'/login'} style={{ textDecoration: 'underline' }}>
         login
       </Link>{' '}
      or{' '}
      <Link to={'/register'} style={{ textDecoration: 'underline' }}>
        register
      </Link>{' '}
       to continue.
    </Heading>
    </Box>
  );
};

export default Home;
