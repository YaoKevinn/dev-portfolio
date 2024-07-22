import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaApple } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

  return (
    <header className={styles.header}>
      <div className={styles.logo}><FaApple /> iOS <span>Developer</span></div>
      {/* <nav className={styles.nav}>
        <a href="#home"><FaHome /> Home</a>
      </nav> */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;
