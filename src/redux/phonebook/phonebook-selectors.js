const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

// const getTotalContactsCount = state => {
//   const contacts = getAllContacts(state);
//   return contacts.length;
// };

const contactsSelectors = {
  getLoading,
  getFilter,
  getAllContacts,
};
export default contactsSelectors;
