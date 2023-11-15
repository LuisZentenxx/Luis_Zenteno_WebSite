import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

export const About = () => {
    return (
    <section className={styles.container} id="about">
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
                            Actualmente estoy aprendiendo React, Typescript y Tailwind. Las soluciones innovadoras van de la mano de técnologías de vanguardia!.
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
                        <p>Me fascina el mundo del backend, ahi reside la magia detrás de cada acción en línea! </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    )
};