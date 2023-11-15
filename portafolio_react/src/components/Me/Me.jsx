import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Me.module.css"

export const Me = () => {

    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, soy Luis</h1>
            <p className={styles.description}>Estudiante de programación</p>
            <a href="mailto:fernandolzm98@gmail.com" className={styles.contactBtn}>Contáctame</a>
        </div>
        <img src={getImageUrl("me/me.png")} alt="My image" className={styles.meImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
}