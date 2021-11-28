import { useSelector } from "react-redux";

import { contactsSelectors } from "../../../redux/phonebook";

export default function Stats() {
  const total = useSelector(contactsSelectors.getTotalContactsCount);

  return <p>{total}</p>;
}
