import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.login({email, password}));
    reset();
  }

  const handleChange = event => {
    const {name, value} = event.currentTarget;
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
  }

  const reset = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
       <label>
        Email
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          type="password"
          name="password"
          required
          placeholder=" "
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
