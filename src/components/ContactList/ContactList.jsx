import { ListItem, ButtonDelete, TextContact } from './ContactList.styled';
import { useSelector } from 'react-redux';

const ContactList = ({contacts, deleteContact}) => {
  const filterValue = useSelector(state => state.filter.filter);

  const filterContacts = filterValue === "" ? contacts :
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase())
    });
    
     return (
       <ul>
         {filterContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <TextContact>{name}: {number}</TextContact>
            <ButtonDelete type="button" onClick={() => deleteContact(id)}>Delete</ButtonDelete>
          </ListItem>
        )
       })}
       </ul>
    );
   }

export default ContactList;
