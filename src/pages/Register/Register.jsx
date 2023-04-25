import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          placeholder="Enter name"
        />
      </label>
      <label>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          placeholder="Enter email"
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

      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
