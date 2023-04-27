import { LinkNav } from "components/Navigation/Navigation.styled";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

const AuthNav = () => {
  return (
    <Breadcrumb separator=''>
    <BreadcrumbItem >
      <BreadcrumbLink as={LinkNav} to='/register'>
      Register
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={LinkNav} to='/login'>
      Login
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
  );
};

export default AuthNav;
