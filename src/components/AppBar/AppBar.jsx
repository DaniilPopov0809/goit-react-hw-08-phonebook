import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Flex justifyContent="center">
      <Box
        as="header"
        width={{ base: '480px', md: '768px', lg: '1280px' }}
        py="2"
        fontSize='2xl'
      >
        <Flex
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems="center"
          flexWrap="wrap"
          flexDirection={{ base: 'column', sm: 'row' }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
    </Flex>
  );
};

export default AppBar;
