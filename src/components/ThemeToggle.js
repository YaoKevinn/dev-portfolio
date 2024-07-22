import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className={styles.toggleBtn} onClick={toggleTheme}>
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
