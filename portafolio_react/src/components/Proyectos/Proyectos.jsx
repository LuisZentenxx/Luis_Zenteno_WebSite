import React from "react";
import projects from "../../data/projects.json"
import styles from "./Proyectos.module.css"
import { ProjectCard } from "./ProjectCard";

export const Proyectos = () => {

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Proyectos</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                        return <ProjectCard key={id} project={project}/>
                    })
                }
            </div>
        </section>
    );
};