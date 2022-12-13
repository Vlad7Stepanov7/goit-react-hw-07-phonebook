import { Formik } from 'formik';
import { FormContacts, Input, NameInput, ButtonAdd } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';

const ContactForm = () => {
    const dispatch = useDispatch();
    
     
    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;

        dispatch(addContact({
            id: nanoid(),
            name,
            number
        }))
          resetForm();
    }
    
    const initialValues = {
            name: '',
            number: ''
    }
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >           
        <FormContacts>
           <NameInput htmlFor="name"> Name
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </NameInput>
            <NameInput htmlFor="number"> Number
                <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
               />
            </NameInput>
            <ButtonAdd type="submit">Add contact</ButtonAdd>
            </FormContacts>
            </Formik>
    )
}

export default ContactForm;