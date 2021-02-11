import React from 'react';
import styles from './styles';

const NotFound = () => {
  return (
    <div style={styles.mainContainer}>
      <h1>Page not found</h1>
      <img style={styles.computerCrash} src="https://cdn4.iconfinder.com/data/icons/computer-science-with-outline-and-color-iconset/48/not_responding-512.png" alt="Computer crash" />
    </div>
  );
};

export default NotFound;
