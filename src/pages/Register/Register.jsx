const Register = () => {
    return (
      <form>
        <label htmlFor="">
          Name
          <input type="text" name="login" />
        </label>
        <label htmlFor="">
          Email
          <input type="email" name="login" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" name="password" />
        </label>
  
        <button type="submit">LogIn</button>
      </form>
    );
  };
  
  export default Register;