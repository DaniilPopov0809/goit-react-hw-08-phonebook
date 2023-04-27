import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispath = useDispatch();

  const handleInputChange = event => {
    dispath(filterContacts(event.currentTarget.value));
  };

  return (
    <FormControl borderRadius="10px" border="1px" p={4} borderColor="inherit" marginBottom={{base: '4', md: "0"}}>
      <FormLabel>Find contacts:</FormLabel>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        placeholder='Enter contact name'
        onChange={handleInputChange}
      />
    </FormControl>
  );
};

export default Filter;
