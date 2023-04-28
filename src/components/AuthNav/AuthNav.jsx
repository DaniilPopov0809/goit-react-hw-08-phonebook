import { LinkNav } from 'components/Navigation/Navigation.styled';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';

const AuthNav = ({ onClose }) => {
  return (
    <Breadcrumb separator="" fontSize='2xl'>
      <Flex flexDirection={{base: 'column', md: 'row'}} gap={{base: '1', md: '4'}}>
      <BreadcrumbItem>
        <BreadcrumbLink as={LinkNav} to="/register" onClick={onClose}>
          Register
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={LinkNav} to="/login" onClick={onClose}>
          Login
        </BreadcrumbLink>
      </BreadcrumbItem>
      </Flex>
    </Breadcrumb>
  );
};

export default AuthNav;
