import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isRefreshing && !isLoggenIn ? <Navigate to={redirectTo} /> : <Component />;
};
