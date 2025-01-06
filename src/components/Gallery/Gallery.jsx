// import React, { useState } from "react";
// import "./Gallery.css";
// import ProjectCard from "../ProjectCard/ProjectCard";
// import projects from "../../projects.json";
// import { projectTypes } from "./projectTypes";

// function Gallery() {
//     const [projectFilter, setProjectFilter] = useState("All");

//     const filterProjects = (e) => {
//         setProjectFilter(e.currentTarget.innerHTML);
//     };

//     return (
//         <>
//             <section className="projects-programme">
//                 {projectTypes.map((type) => {
//                     return (
//                         <h4
//                             className={
//                                 projectFilter === type
//                                     ? "programme-txt active"
//                                     : "programme-txt"
//                             }
//                             key={type}
//                             onClick={filterProjects}
//                         >
//                             {type}
//                         </h4>
//                     );
//                 })}
//             </section>
//             <section className="gallery-container">
//                 {projects
//                     .sort((a, b) => 0.5 - Math.random())
//                     .filter((project) => {
//                         if (projectFilter === "All") {
//                             return project.programme;
//                         }
//                         return project.programme === projectFilter;
//                     })
//                     .map((project) => {
//                         return (
//                             <ProjectCard
//                                 key={project.id}
//                                 coverImg={project.images[0]}
//                                 title={project.title}
//                                 id={project.id}
//                             />
//                         );
//                     })}
//             </section>
//         </>
//     );
// }

// export default Gallery;

import React, { useState } from "react";
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
            {/* Projects Programme Section */}
            <section className="h-[50px] mx-auto flex justify-start items-center w-[98%] max-md:w-[90%] max-md:h-[100px] max-md:flex-wrap max-md:mb-0">
                {projectTypes.map((type) => {
                    return (
                        <h4
                            className={`
                                text-[0.9rem] font-bold font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif] 
                                px-[8px] py-[8px] rounded-[5px] mr-[8px] cursor-pointer
                                transition-[0.2s] ease-in-out
                                max-md:mb-[10px]
                                ${projectFilter === type 
                                    ? "bg-[rgb(33,33,33)] text-white" 
                                    : "bg-[rgb(240,240,240)] text-black hover:bg-[rgb(33,33,33)] hover:text-white"
                                }
                            `}
                            key={type}
                            onClick={filterProjects}
                        >
                            {type}
                        </h4>
                    );
                })}
            </section>

            {/* Gallery Container Section */}
            <section className="flex flex-wrap justify-start items-center gap-[0.5%] w-[98%] mx-auto max-md:w-[90%]">
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