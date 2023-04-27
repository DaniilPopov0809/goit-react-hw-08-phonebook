import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Input, FormControl, Button, FormLabel, Flex } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.login({ email, password }));
    reset();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }

      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Flex justifyContent="center">
      <FormControl
        borderRadius="10px"
        border="1px"
        p="4"
        borderColor="inherit"
        onSubmit={handleSubmit}
        width="100%"
        maxWidth="400px"
        isRequired
      >
        <form>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            required
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
            id={nanoid()}
          />

          <FormLabel>Password</FormLabel>
          <Input
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            type="password"
            name="password"
            required
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
            id={nanoid()}
          />

          <Button type="submit" marginTop="10px">
            Login
          </Button>
        </form>
      </FormControl>
    </Flex>
  );
};

export default Login;
