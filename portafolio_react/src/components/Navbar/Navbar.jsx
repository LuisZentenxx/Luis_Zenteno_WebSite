import React from "react";

export const Navbar = () => {

    return (
        <nav>
            <a href="/">Luis Zenteno Website</a>
            <div>
                <ul>
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