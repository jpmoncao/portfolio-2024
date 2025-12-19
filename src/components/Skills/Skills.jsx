import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import './styles.css';

export default function Skills() {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        async function getSkills() {
            try {
                const response = await fetch('/skills-section.json', {
                    headers: {
                        Accept: 'application/json'
                    }
                });
                const data = await response.json();
                setSkills(data);
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        }

        getSkills();
    }, []);

    return (
        <section className='Skills'>
            <article className='text'>
                <h1>{'<skills />'}</h1>
            </article>
            <section className="skills-container">
                {skills.map((skill, index) => {
                    return <Skill key={index} {...skill} />
                })}
            </section>
        </section>
    )
}