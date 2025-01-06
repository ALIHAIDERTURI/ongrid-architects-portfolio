// PROJECT CARD
// Component to render project img and title as a card in Project Gallery

// import React from "react";
// import "./ProjectCard.css";
// import { useNavigate } from "react-router-dom";

// function ProjectCard({ coverImg, title, id }) {
//     const navigate = useNavigate();

//     // function to open clicked project page
//     const openProject = () => {
//         navigate(`/project/${id}`);
//     };

//     return (
//         <div className="project-card-container" onClick={openProject}>
//             <div className="project-card-img">
//                 <img src={coverImg} alt="" />
//             </div>
//             <div className="project-title">
//                 <h4>{title}</h4>
//             </div>
//         </div>
//     );
// }

// export default ProjectCard;


import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ coverImg, title, id }) {
    const navigate = useNavigate();

    const openProject = () => {
        navigate(`/project/${id}`);
    };

    return (
        <div 
            className="w-full md:w-[24.62%] aspect-[1.4/1] relative mt-5 md:mt-[7px]" 
            onClick={openProject}
        >
            <div 
                className="w-full h-full overflow-hidden rounded-[4px] transition-[0.2s] ease-in cursor-pointer hover:border hover:border-solid hover:border-white"
            >
                <img 
                    src={coverImg} 
                    alt="" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div 
                className="absolute left-2 bottom-2 w-[90%]"
            >
                <h4 
                    className="text-white text-[0.8rem] font-[300] font-['system-ui',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif]"
                >
                    {title}
                </h4>
            </div>
        </div>
    );
}

export default ProjectCard;