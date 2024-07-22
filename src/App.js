import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import ExpertArea from './components/ExpertArea';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.topSection}>
          <Profile />
          <div className={styles.workAndExpertArea}>
            <WorkExperience />
            <ExpertArea />
          </div>
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
