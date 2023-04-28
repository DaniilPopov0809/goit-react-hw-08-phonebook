import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Box, Flex, useMediaQuery, } from '@chakra-ui/react';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';


const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex justifyContent="center">

      <Box
        as="header"
        width={{ base: '480px', md: '768px', lg: '1280px' }}
        py="2"
        fontSize='2xl'
      >
        <Flex
          justifyContent='space-between'
          alignItems="center"
          flexWrap="wrap"
          // flexDirection={{ base: 'column', sm: 'row' }}
        >
          {!isLargerThan768 && <BurgerMenu/>}
          {isLargerThan768 && <Navigation />}
          {isLargerThan768 && (isLoggedIn ? <UserMenu /> : <AuthNav />)}
          {!isLargerThan768 && isLoggedIn && <UserMenu/>}
        </Flex>
      </Box>
    </Flex>
  );
};

export default AppBar;
