import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

const AuthNav = () => {
  return (
    // <ul>
    //   <li>
    //     <NavLink to={'/register'}>Register</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to={'/login'}>Login</NavLink>
    //   </li>
    // </ul>
    <Breadcrumb separator=''>
    <BreadcrumbItem >
      <BreadcrumbLink as={Link} to='/register'>
      Register
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to='/login'>
      Login
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
  );
};

export default AuthNav;
