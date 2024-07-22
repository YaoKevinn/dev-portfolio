import React from "react";
import styles from "./Projects.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import tiendacryptoCover from "../assets/tiendacrypto-cover.jpg";
import tiendacrypto01 from "../assets/projects/tiendacrypto/tiendacrypto-01.PNG";
import tiendacrypto02 from "../assets/projects/tiendacrypto/tiendacrypto-02.PNG";
import tiendacrypto03 from "../assets/projects/tiendacrypto/tiendacrypto-03.PNG";
import tiendacrypto04 from "../assets/projects/tiendacrypto/tiendacrypto-04.PNG";
import tiendacrypto05 from "../assets/projects/tiendacrypto/tiendacrypto-05.PNG";

import financialCover from "../assets/financial-cover.jpg";
import financial01 from "../assets/projects/financial/financial-01.PNG";
import financial02 from "../assets/projects/financial/financial-02.PNG";
import financial03 from "../assets/projects/financial/financial-03.PNG";
import financial04 from "../assets/projects/financial/financial-04.PNG";
import financial05 from "../assets/projects/financial/financial-05.PNG";

import veganInspectorCover from "../assets/veganInspector-cover.jpg";
import veganInspector01 from "../assets/projects/veganInspector/veganInspector-01.jpg";
import veganInspector02 from "../assets/projects/veganInspector/veganInspector-02.jpg";
import veganInspector03 from "../assets/projects/veganInspector/veganInspector-03.jpg";
import veganInspector04 from "../assets/projects/veganInspector/veganInspector-04.jpg";
import veganInspector05 from "../assets/projects/veganInspector/veganInspector-05.jpg";


const projectsData = [
    {
        id: "financial",
        title: "Financial well-being platform",
        subTitle: "Native iOS mobile app",
        description:
            "This project is a financial well-being platform designed to help individuals manage their finances through personalized guidance. It allows users to set financial goals, create customized strategies, explore employer-based benefits, and consult with financial advisors.",
        techStacks: ["iOS", "Swift", "SwiftUI", "UIKit", "Combine", "Realm", "GCD", "Alamofire"],
        images: [
            financial01,
            financial02,
            financial03,
            financial04,
            financial05,
        ],
        coverImage: financialCover,
    },
    {
        id: "tiendacrypto",
        title: "TiendaCrypto - Cryptocurreny Exchange",
        subTitle: "Native iOS mobile app",
        description:
            "TiendaCrypto is a user-friendly cryptocurrency exchange platform that enables individuals and businesses to buy, sell, and manage cryptocurrencies. It offers institutional exchange services, API integration for trading, and commerce solutions. The platform aims to simplify cryptocurrency transactions and provide a seamless experience for all users.",
        techStacks: ["iOS", "Swift", "SwiftUI", "Combine", "Biometric Auth", "Alamofire"],
        images: [
            tiendacrypto01,
            tiendacrypto02,
            tiendacrypto03,
            tiendacrypto04,
            tiendacrypto05,
        ],
        coverImage: tiendacryptoCover,
    },
    {
        id: "veganInspector",
        title: "VeganInspector - Product Identificator",
        subTitle: "Native iOS mobile app",
        description:
            "VeganInspector is a mobile application for the vegan and vegetarian community to quickly help them identify whether a food product is suitable for them. The identification method consists in entering the product name, scanning its barcode or the product's packaging",
        techStacks: ["iOS", "Swift", "SwiftUI", "VisionKit", "Combine", "Alamofire"],
        images: [
            veganInspector01,
            veganInspector02,
            veganInspector03,
            veganInspector04,
            veganInspector05,
        ],
        coverImage: veganInspectorCover,
    },
];

function Projects() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

    const [dialogTitle, setDialogTitle] = React.useState("");
    const [dialogSubtitle, setDialogSubtitle] = React.useState("");
    const [dialogDescription, setDialogDescription] = React.useState("");
    const [dialogTechStacks, setDialogTechStacks] = React.useState([]);
    const [dialogImages, setDialogImages] = React.useState([]);

    const handleClickOpen =
        (scrollType = "paper", selectedProject) =>
        () => {
            setDialogTitle(selectedProject.title);
            setDialogSubtitle(selectedProject.subTitle);
            setDialogDescription(selectedProject.description);
            setDialogTechStacks(selectedProject.techStacks);
            setDialogImages(selectedProject.images);

            setOpen(true);
            setScroll(scrollType);
        };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div className={styles.projects}>
            <h2>Recent Projects</h2>
            <div className={styles.projectList}>
                {/* Project Cards */}

                {projectsData.map((project) => (
                    <div
                        className={styles.projectItem}
                        onClick={handleClickOpen("paper", project)}
                    >
                        <img src={project.coverImage} alt="project-cover" />
                        <strong>{project.title}</strong>
                        <p>{project.subTitle}</p>
                    </div>
                ))}

                {/* Dialog body */}

                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    classes={{ paper: styles.dialog }}
                    maxWidth="lg"
                >
                    <DialogTitle
                        id="scroll-dialog-title"
                        className={styles.dialogTitle}
                    >
                        {dialogTitle}
                    </DialogTitle>

                    <DialogContent
                        dividers={scroll === "paper"}
                        className={styles.dialogContent}
                    >
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                            className={styles.dialogContentText}
                        >
                            <div>
                                <p className={styles.dialogContent}>
                                    {dialogDescription}
                                </p>
                                <div className={styles.techStacks}>
                                    {dialogTechStacks.map((stack) => (
                                        <span className={styles.stackSpan}>
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.screenshots}>
                                    {dialogImages.map((image) => (
                                        <img src={image} alt="" />
                                    ))}
                                </div>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className={styles.dialogActions}>
                        <Button
                            className={styles.dialogCloseButton}
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Projects;
