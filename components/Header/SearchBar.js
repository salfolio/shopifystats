import styles from "./SearchBar.module.css";
import { useRef } from "react";

function SearchBar(props) {
  const inputEl = useRef();

  const SearchFunctionHandler = (e) => {
    e.preventDefault();
    props.setSearch(inputEl.current.value);
    console.log(inputEl.current.value);
    props.setSearchVal(true);
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={SearchFunctionHandler}>
        <input type="text" ref={inputEl} placeholder="Search Track..."></input>
        <input type="submit" id="button" value="Search"></input>
      </form>
    </div>
  );
}

export default SearchBar;
