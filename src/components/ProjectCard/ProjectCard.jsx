// import React from "react";
// import { useNavigate } from "react-router-dom";

// function ProjectCard({ coverImg, title, id }) {
//     const navigate = useNavigate();

//     const openProject = () => {
//         navigate(`/project/${id}`);
//     };

//     return (
//         <div 
//             className="w-full md:w-[24.62%] aspect-[1.4/1] relative mt-5 md:mt-[7px]" 
//             onClick={openProject}
//         >
//             <div 
//                 className="w-full h-full overflow-hidden rounded-[4px] transition-[0.2s] ease-in cursor-pointer hover:border hover:border-solid hover:border-white"
//             >
//                 <img 
//                     src={coverImg} 
//                     alt="" 
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//             <div 
//                 className="absolute left-2 bottom-2 w-[90%]"
//             >
//                 <h4 
//                     className="text-white text-[0.8rem] font-[300] font-['system-ui',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif]"
//                 >
//                     {title}
//                 </h4>
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