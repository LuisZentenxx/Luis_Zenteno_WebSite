import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils"

export const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
            Luis Zenteno Website
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={getImageUrl("nav/menu.png")} alt="menu-button"/>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#about">Sobre Mi</a>
                    </li>

                    <li>
                        <a href="#experience">Experiencia</a>
                    </li>

                    <li>
                        <a href="#projects">Proyectos</a>
                    </li>

                    <li>
                        <a href="#contacts">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}