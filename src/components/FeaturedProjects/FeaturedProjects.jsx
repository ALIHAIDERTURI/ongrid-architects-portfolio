// import React, { useEffect, useState } from "react";
// import "./FeaturedProjects.css";
// import coverImages from "../../coverImages.json";

// function FeaturedProjects() {
//     const [projectUrl, setProjectUrl] = useState("");

//     useEffect(() => {
//         let imageRandomNumber = Math.floor(Math.random() * 17);
//         const projectImageUrl = coverImages[0].coverImages[imageRandomNumber];

//         setProjectUrl(projectImageUrl);
//     }, []);

//     return (
//         <section className="featured-projects-container">
//             <div className="featured-projects-text">
//                 <h3>SELECTED WORKS 2010 / 2022</h3>
//             </div>
//             <div className="featured-projects-imgs">
//                 <img src={projectUrl} alt="" />
//             </div>
//         </section>
//     );
// }

// export default FeaturedProjects;


import React, { useEffect, useState } from "react";
import coverImages from "../../coverImages.json";

function FeaturedProjects() {
    const [projectUrl, setProjectUrl] = useState("");

    useEffect(() => {
        let imageRandomNumber = Math.floor(Math.random() * 17);
        const projectImageUrl = coverImages[0].coverImages[imageRandomNumber];
        setProjectUrl(projectImageUrl);
    }, []);

    return (
        <section className="h-full w-[98%] flex justify-between items-center mx-auto my-[100px] md:flex-row flex-col md:h-full">
            <div className="featured-projects-text">
                <h3 className="w-[80%] text-[9rem] md:text-[10rem] text-black font-['Six_Caps'] font-thin leading-[1] ml-[10px] md:ml-0">
                    SELECTED WORKS 2010 / 2022
                </h3>
            </div>
            <div className="w-[80%] aspect-[1.3/1] overflow-hidden rounded-[10px] hidden md:block">
                <img src={projectUrl} alt="" className="h-full" />
            </div>
        </section>
    );
}

export default FeaturedProjects;