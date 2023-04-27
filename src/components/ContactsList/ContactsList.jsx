import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { Button, Box, Heading, List, ListItem, Flex, Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

const ContactsList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <Flex justifyContent='center' alignItems='center'>
      {isLoading === true && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue"
          size="lg"
        />
      )}
      {error && <Heading as="h3" size="md" color="red">Error!: {error}</Heading>}
      {!isLoading && items.length === 0 && visibleContacts.length === 0 && !error && (
        <Heading as="h3" size="md" color="red">
          You don't have any save contacts!
        </Heading>
      )}
      {items.length !== 0 && visibleContacts.length === 0 && !error && (
        <Heading as="h3" size="md" color="red">
          Contacts '{filter}' not found!
        </Heading>
      
      )}
      </Flex>
      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <Flex justifyContent="space-between" alignItems="center" py={1}>
              <Box marginRight={6}>
                {name}: <Text as='span' color='blue' >{number}</Text>
              </Box>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ContactsList;
