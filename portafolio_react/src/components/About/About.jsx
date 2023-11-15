import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

export const About = () => {
    return (
    <section className={styles.container}>
        <h2 className={styles.title}>Acerca de Mi</h2>
        <div className={styles.content}>
            <img
                src={getImageUrl("me/me2.png")}
                className={styles.aboutImg}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/cursor.png")}
                        alt="cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            Soy un desarrollador frontend que está aprendiendo React y Javascript
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/backend.png")}
                        alt="cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Soy un desarrollador</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    )
};