import { ListItem, ButtonDelete, TextContact } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/contacts/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter.filter);
  
  const filterContacts = filterValue === "" ? contacts :
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase())
    });
  
     return (
       <ul>
         {filterContacts.length > 0 && filterContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <TextContact>{name}: {number}</TextContact>
            <ButtonDelete type="button" onClick={() => dispatch(deleteContact({id}))}>Delete</ButtonDelete>
          </ListItem>
        )
       })}
       </ul>
    );
   }

export default ContactList;
