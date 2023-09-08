import React from 'react';
import styles from 'styles/Search.module.css';

const SearchBar = ({ handleSearch, handleInput }) => {
  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={handleInput}
        placeholder="영문만 입력가능합니다"
      />
      <input className={styles.searchBtn} type="submit" value="검색" />
    </form>
  );
};

export default SearchBar;
