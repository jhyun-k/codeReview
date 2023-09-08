import React from 'react';
import styles from 'styles/Search.module.css';

const SearchBar = ({ handleSearch, handleInput }) => {
  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={handleInput}
      />
      <input className={styles.searchBtn} type="submit" value="검색" />
    </form>
  );
};

export default SearchBar;
