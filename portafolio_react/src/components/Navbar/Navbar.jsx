import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Luis Zenteno Website
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/menu.png")
                            : getImageUrl("nav/close.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                    >
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