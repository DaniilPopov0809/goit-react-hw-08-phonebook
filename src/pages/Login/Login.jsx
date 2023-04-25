import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

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
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <Input
          type="email"
          required
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <Input
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          type="password"
          name="password"
          required
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
