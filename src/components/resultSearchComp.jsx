import React, { useState } from "react";
import styles from "./resultSearchComp.module.css";

function ResultSearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <i className={styles.searchIcon}></i>
        <input
          className={styles.searchInput}
          type = "text"
          name = "search"
          placeholders = "Search"
        />
        <input
          className={styles.locationInput}
          type="text"
          placeholder="Location"
        />
      </div>

    </div>
  );
}

export default ResultSearchBar;
