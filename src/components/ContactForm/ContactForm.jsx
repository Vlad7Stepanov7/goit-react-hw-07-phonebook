import { useForm } from "react-hook-form";
import { FormContacts, Field, NameField, ButtonAdd } from './ContactForm.styled';
import { toast } from "react-toastify";
import { useAddContactMutation } from "redux/contacts/contactsAPI";

const ContactForm = ({ contacts }) => {
    const [addContact] = useAddContactMutation();
    const { register, handleSubmit, reset } = useForm({
    defaultValues: {
        name: '',
        number: ''
    }});
    
    const onSubmit = values => {
        const { name, number } = values;

        const isContact = contacts.find(contact => (
                contact.name === name ||
                contact.number === number
        ));

        if (isContact) {
            toast.warning("There is already a contact or a number");
            reset();
            return; 
        }
       
        addContact({ name, number });
        reset();
    }
    
   
    
    return (
       
        <FormContacts onSubmit={handleSubmit(onSubmit)}>
           <NameField> Name
                <Field
                    {...register("name")}
                type="text"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </NameField>
            <NameField > Number
                <Field
                    {...register("number")}
                type="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
               />
            </NameField>
            <ButtonAdd type="submit">Add contact</ButtonAdd>
            </FormContacts>
    )
}

export default ContactForm;