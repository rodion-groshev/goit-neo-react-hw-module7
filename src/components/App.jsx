import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import Loader from "./Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <b>{error}</b>}
      <ContactList />
    </div>
  );
}

export default App;
