import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
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

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    resetFields();
  };

  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormControl
      borderRadius="10px"
      border="1px"
      p="4"
      borderColor="inherit"
      width="100%"
      maxWidth="400px"
      isRequired
    >
      <form onSubmit={handleSubmit}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          placeholder="Enter name"
          id={nanoid()}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          placeholder="Enter email"
          id={nanoid()}
        />
        <FormLabel>Password</FormLabel>
        <Input
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="The password must be 8 characters or more and contain numbers and capital letters."
          type="password"
          name="password"
          required
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
          id={nanoid()}
        />

        <Button marginTop="10px" type="submit">
          Register
        </Button>
      </form>
    </FormControl>
  );
};

export default Register;
