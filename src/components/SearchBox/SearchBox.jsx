import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const searchID = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.search}>
      <label htmlFor={searchID}>Find contacts by name</label>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        id={searchID}
      ></input>
    </div>
  );
};

export default SearchBox;
