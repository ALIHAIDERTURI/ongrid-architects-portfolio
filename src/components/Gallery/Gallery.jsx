import React, { useState } from "react";
import "./Gallery.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../projects.json";
import { projectTypes } from "./projectTypes";

function Gallery() {
    const [projectFilter, setProjectFilter] = useState("All");

    const filterProjects = (e) => {
        setProjectFilter(e.currentTarget.innerHTML);
    };

    return (
        <>
            <section className="projects-programme">
                {projectTypes.map((type) => {
                    return (
                        <h4
                            className={
                                projectFilter === type
                                    ? "programme-txt active"
                                    : "programme-txt"
                            }
                            key={type}
                            onClick={filterProjects}
                        >
                            {type}
                        </h4>
                    );
                })}
            </section>
            <section className="gallery-container">
                {projects
                    .sort((a, b) => 0.5 - Math.random())
                    .filter((project) => {
                        if (projectFilter === "All") {
                            return project.programme;
                        }
                        return project.programme === projectFilter;
                    })
                    .map((project) => {
                        return (
                            <ProjectCard
                                key={project.id}
                                coverImg={project.images[0]}
                                title={project.title}
                                id={project.id}
                            />
                        );
                    })}
            </section>
        </>
    );
}

export default Gallery;
