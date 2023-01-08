import Box from "./utils/Box";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useGetContactsQuery, useDeleteContactMutation } from "redux/contacts/contactsAPI";

export const App = () => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { data: contacts, error, isFetching } = useGetContactsQuery();
  
  const isShow = contacts && !error && !isFetching && !isDeleting;
  const isLoader = isFetching || isDeleting;
  
  const notificationError = (error) => {
      console.log(error);
      toast.error(error.error)
  };
  
  return (
    <Box
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      fontSize='40'
      color='#010101'
    >
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts}/>
      <h2>Contact</h2>
      <Filter />
      {isLoader && <Loader/>}
      {error && notificationError(error)}
      {isShow && <ContactList contacts={contacts} deleteContact={deleteContact} />} 
      
      <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="colored"
      />
    </Box>)
  };

