import React from "react";
import styles from "./WorkExperience.module.css";
import acceloneImage from "../assets/accelone.svg";
import tiendacrypto from "../assets/tiendacrypto.png";
import tiendadolar from "../assets/tiendadolar.png";

function WorkExperience() {
    return (
        <div className={styles.workExperience}>
            <h2>Work Experience</h2>
            <ul>
                <li>
                    <img src={acceloneImage} alt="logo" />
                    <div className="col" style={{ flex: 1 }}>
                        <strong>AccelOne</strong>
                        <span>Mid Senior iOS Developer</span>
                    </div>
                    <span>(2023 - 2024)</span>
                </li>
                <li>
                    <img src={tiendacrypto} alt="logo" />
                    <div className="col" style={{ flex: 1 }}>
                        <strong>TiendaCrypto</strong>
                        <span>iOS Developer</span>
                    </div>
                    <span>(2022 - 2023)</span>
                </li>
                <li>
                    <img src={tiendadolar} alt="logo" />
                    <div className="col" style={{ flex: 1 }}>
                        <strong>TiendaDólar</strong>
                        <span>Angular Developer</span>
                    </div>
                    <span>(2021 - 2022)</span>
                </li>
            </ul>
        </div>
    );
}

export default WorkExperience;
