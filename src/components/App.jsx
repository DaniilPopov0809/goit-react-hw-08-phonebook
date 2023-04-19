import React from 'react';
import { Route, Routes} from 'react-router-dom';
// import { lazy } from 'react';
import AppBar from './AppBar/AppBar';

import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));



export default function App() {
  return (<>
    <AppBar/>
    
    
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    </>
  );
}
