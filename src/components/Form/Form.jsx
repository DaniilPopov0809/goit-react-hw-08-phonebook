import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContactsItems } from 'redux/contacts/selectors';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }

      default:
        return;
    }
  };

  const handleSumbit = event => {
    event.preventDefault();
    const normalizateName = name.toLocaleLowerCase();
    const findName = contacts.filter(
      contact => contact.name.toLocaleLowerCase() === normalizateName
    );
    if (findName.length !== 0) {
      toast.error('This contact alredy save');
    } else {
      dispatch(addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormControl
      borderRadius="10px"
      border="1px"
      p={4}
      borderColor="inherit"
      marginBottom={4}
      isRequired
    >
      <form onSubmit={handleSumbit}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="Enter name"
          onChange={handleInputChange}
          id={nanoid()}
        />

        <FormLabel>Number</FormLabel>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          placeholder="Enter phone number"
          onChange={handleInputChange}
          id={nanoid()}
        />

        <Button marginTop="10px" type="submit">
          Add contact
        </Button>
      </form>
    </FormControl>
  );
}
