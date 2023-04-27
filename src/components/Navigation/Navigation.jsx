import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { LinkNav } from './Navigation.styled';



const Navigation = () => {
  return (
    <Breadcrumb separator="" marginRight={{base: '4', md: '0'}}>
      <BreadcrumbItem >
        <BreadcrumbLink as={LinkNav} to="/"  >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem >
      <BreadcrumbItem >
        <BreadcrumbLink as={LinkNav} to="/contacts" >
          Contacts
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Navigation;
