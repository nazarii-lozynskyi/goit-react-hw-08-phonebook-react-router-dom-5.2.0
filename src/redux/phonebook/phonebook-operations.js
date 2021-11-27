import axios from 'axios';
import {
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phonebook-actions';

// GET @ /tasks
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// POST @ /tasks
const addNewContact = description => dispatch => {
  // const contact = {
  //   description,
  //   completed: false,
  // };

  dispatch(addNewContactRequest());

  axios
    .post('/contacts', description)
    .then(({ data }) => dispatch(addNewContactSuccess(data)))
    .catch(error => dispatch(addNewContactError(error.message)));
};

// DELETE @ /tasks/:id
const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

const contactsOperations = {
  fetchContacts,
  addNewContact,
  deleteContact,
};
export default contactsOperations;
