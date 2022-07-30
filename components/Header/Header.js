import styles from "./Header.module.css";
import SearchBar from "./SearchBar";

function Header(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="./images/logo/trackstatslogo.png" width="50px"></img>
        <p>trackstats</p>
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBar setSearch={props.setSearch} />
      </div>
    </div>
  );
}

export default Header;
