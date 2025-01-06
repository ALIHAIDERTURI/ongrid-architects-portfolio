// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
// import ProjectDetails from "../ProjectDetails/ProjectDetails";
// import projects from "../../projects.json";
// import "./Project.css";

// function Project() {
//     // extract project id from params
//     const { id } = useParams();

//     const [projectData, setProjectData] = useState({
//         id: null,
//         title: "",
//         desc: "",
//         year: null,
//         location: "",
//         client: "",
//         phase: "",
//         programme: "",
//         role: "",
//         images: [],
//         videos: [],
//     });

//     useEffect(() => {
//         // filter projects list to get the selected project by id
//         const projectData = projects.filter((project) => {
//             return Number(id) === project.id;
//         });
//         // store project data
//         setProjectData(projectData[0]);
//     }, [id]);

//     return (
//         <>
//             <NavBar />
//             <ProjectDetails projectData={projectData} />

//             {/* -----  Render project images ------ */}
//             {projectData.images.map((imageUrl, index) => {
//                 return (
//                     <img
//                         key={index}
//                         className="project-img"
//                         src={imageUrl}
//                         alt={projectData.title}
//                     />
//                 );
//             })}

//             {/* -----  Render project videos ------ */}
//             {projectData.videos &&
//                 projectData.videos.map((videoUrl, index) => {
//                     return (
//                         <iframe
//                             key={index}
//                             className="project-video"
//                             title="project-video"
//                             src={videoUrl}
//                             allowFullScreen
//                         ></iframe>
//                     );
//                 })}
//         </>
//     );
// }

// export default Project;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import projects from "../../projects.json";

function Project() {
  // extract project id from params
  const { id } = useParams();

  const [projectData, setProjectData] = useState({
    id: null,
    title: "",
    desc: "",
    year: null,
    location: "",
    client: "",
    phase: "",
    programme: "",
    role: "",
    images: [],
    videos: [],
  });

  useEffect(() => {
    // filter projects list to get the selected project by id
    const projectData = projects.filter((project) => {
      return Number(id) === project.id;
    });
    // store project data
    setProjectData(projectData[0]);
  }, [id]);

  return (
    <>
      <NavBar />
      <ProjectDetails projectData={projectData} />
      {/* -----  Render project images ------ */}
      {projectData.images.map((imageUrl, index) => {
        return (
          <img
            key={index}
            src={imageUrl}
            alt={`Project ${index + 1}`}
            className="block mx-auto w-[75vw] md:w-[75vw] rounded-[10px] mb-5"
          />
        );
      })}

      {/* -----  Render project videos ------ */}
      {projectData.videos &&
        projectData.videos.map((videoUrl, index) => {
          return (
            <iframe
              key={index}
              src={videoUrl}
              className="block mx-auto w-[90%] md:w-[75%] aspect-[1.8/1] border-0"
            />
          );
        })}
    </>
  );
}

export default Project;
