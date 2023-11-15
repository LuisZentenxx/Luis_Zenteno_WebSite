import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./Experiencia.module.css"
import skills from "../../data/skills.json"
import history from "../../data/history";

export const Experiencia = () => {

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experiencia</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skills, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <p>{skills.title}</p>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skills.imageSrc)} />
                                </div>
                            </div>
                        );
                    })
                }
                </div>

                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <div className={styles.historyItemDetails}>
                                    <h3>
                                        {`${historyItem.role}, ${historyItem.organization}`}
                                        <p>
                                            {`${historyItem.startDate} - ${historyItem.endDate}`}
                                        </p>
                                        <ul>
                                            {historyItem.experience.map((experience, id) => {
                                                return <li key={id}>
                                                    {experience}
                                                </li>
                                            })}
                                        </ul>
                                    </h3>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}