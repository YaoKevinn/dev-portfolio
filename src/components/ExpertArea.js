import React from 'react';
import styles from './ExpertArea.module.css';
import { FaSwift, FaAppStoreIos, FaGithubSquare, FaGitSquare, FaAngular, FaJs } from 'react-icons/fa';
import { SiTypescript, SiRealm } from 'react-icons/si';
import swiftImage from '../assets/swift.svg';
import swiftuiImage from '../assets/swiftui.png';

function ExpertArea() {
  return (
    <div className={styles.expertArea}>
      <h2>My Expert Area</h2>
      <div className={styles.technologies}>
        <div className={styles.item}>
            <img src={swiftImage} className={styles.icon} alt="logo" />
            Swift
        </div>
        <div className={styles.item}>
            <img src={swiftuiImage} className={styles.icon} alt="logo" />
            SwiftUI
        </div>
        <div className={styles.item}>
            <FaSwift className={styles.icon} />UIKit
        </div>
        <div className={styles.item}>
            <FaSwift className={styles.icon} />Combine
        </div>
        <div className={styles.item}>
            <FaAppStoreIos className={styles.icon} />iOS
        </div>
        <div className={styles.item}>
            <FaGithubSquare className={styles.icon} />Github
        </div>
        <div className={styles.item}>
            <FaGitSquare className={styles.icon} />Git
        </div>
        <div className={styles.item}>
            <SiRealm className={styles.icon} />Realm
        </div>
        <div className={styles.item}>
            <FaAngular className={styles.icon} />Angular
        </div>
        <div className={styles.item}>
            <FaJs className={styles.icon} />Javascript
        </div>
        <div className={styles.item}>
            <SiTypescript className={styles.icon} />Typescript
        </div>
      </div>
    </div>
  );
}

export default ExpertArea;
