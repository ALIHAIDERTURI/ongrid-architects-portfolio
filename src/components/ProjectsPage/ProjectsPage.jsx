// import React from "react";
// import NavBar from "../NavBar/NavBar";
// import Gallery from "../Gallery/Gallery";
// import "./ProjectsPage.css";

// export default function ProjectsPage() {
//     return (
//         <>
//         <NavBar />
//             <section className="projects-page-main-title">
//                 <h2>selected design projects 2010 -2022</h2>
//             </section>
            
//             <Gallery />
//         </>
//     );
// }


// import React from "react";
// import NavBar from "../NavBar/NavBar";
// import Gallery from "../Gallery/Gallery";

// export default function ProjectsPage() {
//     return (
//         <>
//             <NavBar />
//             <section className="flex flex-col justify-between items-start w-[98%] mx-auto mt-[100px] mb-[30px] md:w-[90%]">
//                 <h2 className="text-6xl font-thin mb-0 text-justify text-black font-['Six_Caps'] uppercase normal-normal leading-none md:text-5xl">
//                     selected design projects 2010 -2022
//                 </h2>
//             </section>
            
//             <Gallery />
//         </>
//     );
// }

import React from "react";
import NavBar from "../NavBar/NavBar";
import Gallery from "../Gallery/Gallery";

export default function ProjectsPage() {
    return (
        <>
            <NavBar />
            <section className="flex flex-col justify-between items-start w-[90%] md:w-[98%] mx-auto my-[100px] mb-[30px] ">
                <h2 className="text-[3rem] md:text-[4rem] font-[100] mb-0 text-justify text-black font-['Six_Caps'] uppercase not-italic normal-normal leading-[1] ">
                    selected design projects 2010 -2022
                </h2>
            </section>
            
            <Gallery />
        </>
    );
}