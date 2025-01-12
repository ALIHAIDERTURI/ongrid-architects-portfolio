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
import SkeletonImage from "../SkeletonLoader/skeletonLoader"; // Adjust the import path as needed

// Custom skeleton template for project cards
const ProjectCardSkeleton = () => (
  <div className="w-full h-full animate-pulse">
    {/* Background skeleton */}
    <div className="w-full h-full bg-gray-300 rounded-[4px]" />
    
    {/* Title skeleton */}
    <div className="absolute left-2 bottom-2 w-[90%]">
      <div className="h-4 bg-gray-400 rounded w-2/3" />
    </div>
  </div>
);

function ProjectCard({ coverImg, title, id }) {
  const navigate = useNavigate();

  const openProject = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div 
      className="w-full h-full md:w-[24.62%] aspect-[1.4/1] relative mt-5 md:mt-[7px]" 
      onClick={openProject}
    >
      <div 
        className="w-full h-full overflow-hidden rounded-[4px] transition-[0.2s] ease-in cursor-pointer hover:border hover:border-solid hover:border-white"
      >
        <SkeletonImage
          src={coverImg}
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
          SkeletonTemplate={ProjectCardSkeleton}
        >
          {/* Title overlay */}
          <div className="absolute left-2 bottom-2 w-[90%]">
            <h4 className="text-white text-[0.8rem] font-[300] font-['system-ui',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif]">
              {title}
            </h4>
          </div>
        </SkeletonImage>
      </div>
    </div>
  );
}

export default ProjectCard;