import defaultAvatart from '../../image/default_avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const avatar = defaultAvatart;

  return (
    <Box>
      <Flex alignItems="center">
        <Avatar name="avatar" src={avatar} size="sm" marginRight={2} />
        <Box marginRight={2}><Text as='span' color='blue'>{name}</Text></Box>
        <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default UserMenu;
