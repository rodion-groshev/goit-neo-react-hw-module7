import css from "./Contact.module.css";
import iconUser from "../../img/user.svg";
import iconPhone from "../../img/phone.svg";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.card}>
      <div className={css.cardOutline}>
        <div className={css.cardWrapper}>
          <img src={iconUser}></img>
          <p>{contact.name}</p>
        </div>
        <div className={css.cardWrapper}>
          <img src={iconPhone}></img>
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={css.contactBtn} onClick={handleClick} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
