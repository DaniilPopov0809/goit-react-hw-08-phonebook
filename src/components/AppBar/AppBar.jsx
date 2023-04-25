import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
   {isLoggedIn ? <UserMenu /> : <AuthNav />} 
     
    </header>
  );
};

export default AppBar;
