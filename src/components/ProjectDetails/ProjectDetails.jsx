// PROJECT DETAILS
// Component to render all project details

import React from "react";
import "./ProjectDetails.css";

function ProjectDetails({ projectData }) {
    return (
        <section className="project-wrapper">
            <div className="project-text-wrapper main-container">
                <div className="project-name">
                    <h3>{projectData.title}</h3>
                </div>

                <div className="project-desc">
                    <p>{projectData.desc}</p>
                </div>

                <div className="project-facts-wrapper">
                    <div className="project-fact">
                        <p className="fact">YEAR</p>
                        <p className="value">{projectData.year}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">LOCATION</p>
                        <p className="value">{projectData.location}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">CLIENT</p>
                        <p className="value">{projectData.client}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">PHASE</p>
                        <p className="value">{projectData.phase}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">PROGRAMME</p>
                        <p className="value">{projectData.programme}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">ROLE</p>
                        <p className="value">{projectData.role}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails;
