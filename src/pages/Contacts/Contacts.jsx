import ContactsForm from '../../components/Form/Form';
import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import { Container } from '../../components/App.styled';

const Contacts = () => {
    return (
        <>
          <Container>
            <h1>Phonebook</h1>
            <ContactsForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactsList />
          </Container>
        </>
      );
}

export default Contacts;