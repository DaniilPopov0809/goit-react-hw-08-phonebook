import ContactsForm from '../../components/Form/Form';
import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';


const Contacts = () => {
  return (
    <Box borderRadius="10px" border="1px" p={4} borderColor="inherit">
      <Heading as="h1" marginBottom={3}>
        Phone<Text as='span' color='blue'>Book</Text>
      </Heading>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box marginRight={{md: "4"}}>
          <ContactsForm />
          <Filter />
        </Box>
        <Box borderRadius="10px" border="1px" p={4} borderColor="inherit">
          <Heading as="h2" marginBottom={3} fontSize='2xl'>Your save contacts:</Heading>
          <ContactsList />
        </Box>
      </Flex>
    </Box>
  );
};

export default Contacts;
