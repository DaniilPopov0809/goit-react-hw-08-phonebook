import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/auth-operations';
import Layout from './Layout/Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { Box, Center } from '@chakra-ui/react';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <Center h="100vh">
      <Box as="p" fontSize="2xl">
        Refresh user data...
      </Box>
    </Center>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<PublicRoute component={Register} redirectTo="/contacts" />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
