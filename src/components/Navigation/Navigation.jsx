import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import { LinkNav } from './Navigation.styled';

const Navigation = ({onClose}) => {
  return (
    <Breadcrumb separator="" fontSize='2xl' marginBottom='1' >
      <Flex flexDirection={{base: 'column', md: 'row'}} gap={{base: '1', md: '4'}}>
      <BreadcrumbItem >
        <BreadcrumbLink as={LinkNav} to="/" onClick={onClose} >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem >
      <BreadcrumbItem >
        <BreadcrumbLink as={LinkNav} to="/contacts" onClick={onClose}>
          Contacts
        </BreadcrumbLink>
      </BreadcrumbItem>
      </Flex>
    </Breadcrumb>
  );
};

export default Navigation;
