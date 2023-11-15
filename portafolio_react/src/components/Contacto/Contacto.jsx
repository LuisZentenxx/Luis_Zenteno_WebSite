import React from "react";

import styles from "./Contacto.module.css";
import { getImageUrl } from "../../utils";

export const Contacto = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacto</h2>
        <p>Puedes seguirme en LinkedIn y Github!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contacto/gmail.png")} alt="Email icon" />
          <a href="mailto:fernandolm98@gmail.com">fernandolzm98@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contacto/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/luis-zenteno-xprogram/">Luis Zenteno</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contacto/github.png")} alt="Github icon" />
          <a href="https://github.com/LuisZentenxx">Fernan_dr0id | LuisZentenxx</a>
        </li>
      </ul>
    </footer>
  );
};