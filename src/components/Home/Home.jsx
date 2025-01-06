// import React from "react";
// import Cover from "../Cover/Cover";
// import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
// import Gallery from "../Gallery/Gallery";
// import "./Home.css";

// function Home() {
//     return (
//         <>
//             <Cover />
//             {/* <FeaturedProjects />
//             <Gallery /> */}
//         </>
//     );
// }

// export default Home;

import React from "react";
import Cover from "../Cover/Cover";
import TimeLine from "../Timeline/timeLine";


function Home() {
    return (
        <div className="min-h-screen bg-white m-0 p-0 box-border">
            <Cover />
            {/* <TimeLine /> */}
            
        </div>
    );
}

export default Home;