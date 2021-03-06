import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getAllContacts = (state) => state.contacts.items;

const getTotalContactsCount = (state) => {
  const contacts = getAllContacts(state);
  return contacts.length;
};

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getAllContacts,
  getTotalContactsCount,
  getVisibleContacts,
};
export default contactsSelectors;
