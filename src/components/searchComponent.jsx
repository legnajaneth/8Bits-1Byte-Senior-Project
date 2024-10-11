import React, { useRef } from "react";
import styles from "./searchComponent.module.css";

function SearchBar() {

  const backgroundStyle = {
    backgroundColor: "rgb(240, 254, 240)",
  }

  return (
    <div style={backgroundStyle}>
      <div className={styles.container}>
      <div>
        <h1 className={styles.container.H1}>
          Find & Share your Audiology Externships
        </h1>
        <p className={styles.containerP}>
          Discover what your peers feel about their externship experience and
          share your experiences with others.
        </p>
      </div>
      <div className={styles.searchBar}>
        <i className={styles.searchIcon}></i>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
        <input
          className={styles.locationInput}
          type="text"
          placeholder="Location"
        />
      </div>
    </div>
    </div>
  );
}

export default SearchBar;
