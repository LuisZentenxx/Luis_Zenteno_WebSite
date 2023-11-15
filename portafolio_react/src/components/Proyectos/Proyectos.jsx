import React from "react";
import projects from "../../data/projects.json"
import { getImageUrl } from "../../utils";

export const Proyectos = () => {

    return (
        <section>
            <h2>Proyectos</h2>
            <div>
                {
                    projects.map((project, id) => {
                        return <div key={id}>
                            <img
                                src={getImageUrl(project.imageSrc)}
                                alt={`Imagen de ${project.title}`} 
                            />
                            <h3>
                                {project.title}
                            </h3>
                            <p>
                                {project.description}
                            </p>
                            <ul>
                                {project.skills.map((skill, id) => {
                                    <li key={id}>
                                        {skill}
                                    </li>
                                })}
                            </ul>
                            <div>
                                <a href={project.source}>Repositorio</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}