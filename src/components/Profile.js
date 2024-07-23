import React from "react";
import styles from "./Profile.module.css";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import profilePhoto from "../assets/profilePhoto.jpg";
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { IoDocumentTextOutline } from "react-icons/io5";
import cvFile from "../assets/Chien-Hsi-Yao-iOS-Developer-Resume.pdf";

function Profile() {

    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {  
      setOpen(false);
    };

    const openNewTab = (url) => {
        window.open(url, '_blank');
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/61457614369?text=${encodeURIComponent("Hello, I want to send you a message.")}`;
        window.location.href = url;
      };

      const copyEmail = (email) => {
        if (navigator.clipboard && window.isSecureContext) {
          // Use the Clipboard API
          navigator.clipboard.writeText(email).then(
            () => {
              console.log('Email copied to clipboard');
              setOpen(true);
            },
            (err) => {
              console.error('Could not copy text: ', err);
            }
          );
        } else {
          // Fallback for older browsers
          let textArea = document.createElement("textarea");
          textArea.value = email;
      
          // Avoid scrolling to bottom
          textArea.style.top = "0";
          textArea.style.left = "0";
          textArea.style.position = "fixed";
      
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
      
          try {
            document.execCommand('copy');
            console.log('Email copied to clipboard');
            setOpen(true);
          } catch (err) {
            console.error('Could not copy text: ', err);
          }
      
          document.body.removeChild(textArea);
        }
      };

    return (
        <div className={styles.profile}>
            <img src={profilePhoto} className={styles.image} alt=""></img>
            <h1 className={styles.name}>
                Yao Chien Hsi{" "}
                <span role="img" aria-label="wave">
                    👋
                </span>
            </h1>
            <p className={styles.description}>
            Experienced <b>iOS Developer</b> with a focus on Swift and SwiftUI, adept at leading teams and delivering high-conversion <b>Mobile Applications</b>.
            </p>
            <div className={styles.contactButtons}>
                <button onClick={() => openWhatsApp() } className={styles.secondaryButton}>
                    <FaWhatsapp className={styles.buttonIcons} />
                    Whatsapp
                 </button>
                <button onClick={() => copyEmail("yao.chienhsi@gmail.com")} className={styles.secondaryButton}>
                    <CiMail className={styles.buttonIcons} />
                    Email
                </button>
                {/* <button onClick={() => downloadPdf()} className={styles.secondaryButton}>
                    <IoDocumentTextOutline className={styles.buttonIcons} />
                    CV
                </button> */}
                <a href={cvFile} target="_blank" rel="noreferrer">
                    <button className={styles.secondaryButton}>
                        <IoDocumentTextOutline className={styles.buttonIcons} />
                        CV
                    </button>
                </a>
            </div>
            <div className={styles.socialLinks}>
                {/* Replace with actual social media icons */}
                <div className={styles.iconWrapper}>
                    <FaLinkedinIn onClick={() => openNewTab("https://www.linkedin.com/in/yao-chien-hsi-kevin/")} />
                </div>
                <div className={styles.iconWrapper}>
                    <FaGithub onClick={() => openNewTab("https://github.com/YaoKevinn")} />
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="info"
                    variant="filled"
                    sx={{ width: '100%', backgroundColor: '#bb86fc' }}
                >
                    Email Copied!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Profile;
