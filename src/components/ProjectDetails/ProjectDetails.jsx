// import React from "react";
// import "./ProjectDetails.css";

// function ProjectDetails({ projectData }) {
//     return (
//         <section className="project-wrapper">
//             <div className="project-text-wrapper main-container">
//                 <div className="project-name">
//                     <h3>{projectData.title}</h3>
//                 </div>

//                 <div className="project-desc">
//                     <p>{projectData.desc}</p>
//                 </div>

//                 <div className="project-facts-wrapper">
//                     <div className="project-fact">
//                         <p className="fact">YEAR</p>
//                         <p className="value">{projectData.year}</p>
//                     </div>
//                     <div className="project-fact">
//                         <p className="fact">LOCATION</p>
//                         <p className="value">{projectData.location}</p>
//                     </div>
//                     <div className="project-fact">
//                         <p className="fact">CLIENT</p>
//                         <p className="value">{projectData.client}</p>
//                     </div>
//                     <div className="project-fact">
//                         <p className="fact">PHASE</p>
//                         <p className="value">{projectData.phase}</p>
//                     </div>
//                     <div className="project-fact">
//                         <p className="fact">PROGRAMME</p>
//                         <p className="value">{projectData.programme}</p>
//                     </div>
//                     <div className="project-fact">
//                         <p className="fact">ROLE</p>
//                         <p className="value">{projectData.role}</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ProjectDetails;


import React from "react";

function ProjectDetails({ projectData }) {
    return (
        <section>
            <div className="flex flex-col justify-between items-start mx-auto my-[50px] md:my-[100px] mb-[50px] w-[90%] md:w-[75%]">
                <div className="w-full">
                    <h3 className="w-full text-black text-8xl font-extralight leading-none uppercase mb-[30px] font-['Six_Caps'] text-[3rem] md:text-[5rem]">
                        {projectData.title}
                    </h3>
                </div>

                <div className="mb-[30px]">
                    <p className="text-[#9c9c9c] text-l md:text-xl font-extralight font-[system-ui] text-justify">
                        {projectData.desc}
                    </p>
                </div>

                <div className="w-[85%] flex justify-start items-start md:w-[90%] flex-col md:flex-row">
                    <div className="mr-[25px] md:mb-[10px]">
                        <p className="text-[#5e5e5e] font-[system-ui]">YEAR</p>
                        <p className="mt-[5px] text-[#9c9c9c] font-[system-ui]">
                            {projectData.year}
                        </p>
                    </div>
                    <div className="mr-[25px] md:mb-[10px]">
                        <p className="text-[#5e5e5e] font-[system-ui]">LOCATION</p>
                        <p className="mt-[5px] text-[#9c9c9c] font-[system-ui]">
                            {projectData.location}
                        </p>
                    </div>
                    <div className="mr-[25px] md:mb-[10px]">
                        <p className="text-[#5e5e5e] font-[system-ui]">CLIENT</p>
                        <p className="mt-[5px] text-[#9c9c9c] font-[system-ui]">
                            {projectData.client}
                        </p>
                    </div>
                    <div className="mr-[25px] md:mb-[10px]">
                        <p className="text-[#5e5e5e] font-[system-ui]">PHASE</p>
                        <p className="mt-[5px] text-[#9c9c9c] font-[system-ui]">
                            {projectData.phase}
                        </p>
                    </div>
                    <div className="mr-[25px] md:mb-[10px]">
                        <p className="text-[#5e5e5e] font-[system-ui]">PROGRAMME</p>
                        <p className="mt-[5px] text-[#9c9c9c] font-[system-ui]">
                            {projectData.programme}
                        </p>
                    </div>
                    <div className="mr-[25px] md:mb-[10px]">
                        <p className="text-[#5e5e5e] font-[system-ui]">ROLE</p>
                        <p className="mt-[5px] text-[#9c9c9c] font-[system-ui]">
                            {projectData.role}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails;