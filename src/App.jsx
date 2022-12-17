import Box from "./utils/Box";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
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
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      {isLoading && <p>Hello</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && !error && <ContactList />}
      
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

