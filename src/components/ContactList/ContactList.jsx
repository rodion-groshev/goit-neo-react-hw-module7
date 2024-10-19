import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import Notification from "../Notification/Notification";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return visibleContacts.length > 0 ? (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  ) : (
    <Notification />
  );
};

export default ContactList;
