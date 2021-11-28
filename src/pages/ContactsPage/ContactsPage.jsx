import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/phonebook";

import Contacts from "../../components/PhoneBook/Contacts";
import Form from "../../components/PhoneBook/Form";
import SearchContactForm from "../../components/PhoneBook/SearchContactForm";
import Loader from "../../components/PhoneBook/Loader";
import Skeleton from "../../components/PhoneBook/Skeleton";

import { Container } from "@mui/material";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const contacts = useSelector(contactsSelectors.getAllContacts);

  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <Container>
      <Form contacts={contacts} />

      <SearchContactForm />

      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
      />

      {isLoadingContacts ? <Loader /> : <Contacts />}

      {/*{!isLoadingContacts && <Skeleton />}*/}
    </Container>
  );
}

export default ContactsPage;
