// import React, { useEffect, useState } from "react";
// import MouseIcon from "../MouseIcon/MouseIcon";
// import NavBar from "../NavBar/NavBar";
// import "./Cover.css";
// import coverImages from "../../coverImages.json";

// function Cover() {
//     const [coverUrl, setCoverUrl] = useState("");

//     useEffect(() => {
//         let imageRandomNumber = Math.floor(Math.random() * 11);
//         const coverImageUrl = coverImages[0].coverImages[imageRandomNumber];

//         setCoverUrl(coverImageUrl);
//     }, []);

//     return (
//         <>
//             <NavBar />
//             <main className="cover-wrapper">
//                 <div
//                     className="cover"
//                     style={{
//                         backgroundImage: `url("${coverUrl}")`,
//                     }}
//                 >
//                 </div>
//                 { <div className="mouse-icon-row">
//                     <MouseIcon />
//                 </div> }
//             </main>
//         </>
//     );
// }

// export default Cover;

// import React, { useEffect, useState } from "react";
// import MouseIcon from "../MouseIcon/MouseIcon";
// import NavBar from "../NavBar/NavBar";
// import coverImages from "../../coverImages.json";
// import {TypewriterEffectSmooth} from "../Cover/TypeWriterEffect";

// function Cover() {
//   const [coverUrl, setCoverUrl] = useState("");

//   useEffect(() => {
//     let imageRandomNumber = Math.floor(Math.random() * 11);
//     const coverImageUrl = coverImages[0].coverImages[imageRandomNumber];
//     setCoverUrl(coverImageUrl);
//   }, []);
//   const words = [
//     {
//       text: "Build",
//     },
//     {
//       text: "awesome",
//     },
//     {
//       text: "Designs",
//     },
//     {
//       text: "with",
//     },
//     {
//       text: "OnGrids.",
//       className: "text-blue-500 dark:text-blue-500",
//     },
//   ];
//   return (
//     <>
//       <NavBar />
//       <main className="flex justify-center items-center w-full h-screen mt-8">
//         <div
//           className="w-full h-[90%] bg-cover bg-no-repeat object-contain saturate-80  flex justify-start items-center"
//           style={{
//             backgroundImage: `url("${coverUrl}")`,
//           }}
//         >
//             <TypewriterEffectSmooth words={words} className={`ms-[3rem]`} />
          
//         </div>
//         <div className="absolute bottom-[55px] md:bottom-[35px] h-[50px] w-full">
//           <MouseIcon />
//         </div>
//       </main>
//     </>
//   );
// }

// export default Cover;




// import React, { useState, useEffect } from "react";
// import NavBar from "../NavBar/NavBar";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const TypewriterEffect = ({ slide, currentSlide }) => {
//   const [displayedTitle, setDisplayedTitle] = useState("");

//   useEffect(() => {
//     let charIndex = 0;
//     let typingTimeout;

//     const typeWriter = () => {
//       if (charIndex < slide.title.length) {
//         setDisplayedTitle((prev) => prev + slide.title.charAt(charIndex));
//         charIndex++;
//         typingTimeout = setTimeout(typeWriter, 100); // Adjust typing speed here
//       }
//     };

//     setDisplayedTitle(""); // Reset title before typing
//     typeWriter();

//     // Cleanup the timeout to prevent potential memory leaks
//     return () => {
//       clearTimeout(typingTimeout);
//     };
//   }, [slide, currentSlide]); // Added `slide` in dependencies for safety

//   return <h1>{displayedTitle}</h1>;
// };

// function Cover() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Residential Building Design",
//       description: "We offer Architectural Services for Commercial, Residential, Hospitality, Institutional and Recreational Projects",
//       image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099090/Landscape_View_4_bpz3ea.jpg" // Replace with your image path
//     },
//     {
//       title: "Commercial Buildings Design",
//       description: "We offer Commercial building design, initial financial feasibility report, 3d visualisation of interior and exterior, VR walkthrough.",
//       image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099079/Landscape_View_1_xo7e7q.jpg" // Replace with your image path
//     },
//     {
//       title: "Hospitality and Religious Buildings",
//       description: "We offer design solutions for hospitality buildings, such as hotels, resorts, spa, guest houses and religious buildings such as mosques, Imam Bargah, Shrines etc.",
//       image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099045/1502_9_ikst8m.jpg" // Replace with your image path
//     },
//     {
//       title: "Hospitality and Religious Buildings",
//       description: "We offer design solutions for hospitality buildings, such as hotels, resorts, spa, guest houses and religious buildings such as mosques, Imam Bargah, Shrines etc.",
//       image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099040/WhatsApp_Image_2021-01-06_at_10.34.18_1_n2xcpb.jpg" // Replace with your image path
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <>
//       <NavBar />
//       <main className="flex justify-center w-full h-screen">
//         <div className="w-full h-[91%] relative flex justify-start items-center overflow-hidden">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute w-full h-full transition-all duration-500 ease-in-out transform
//                 ${index === currentSlide ? "translate-x-0" : 
//                   index < currentSlide ? "-translate-x-full" : "translate-x-full"}`}
//             >
//               {/* Background Image */}
//               <div
//                 className="absolute w-full h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               />
              
//               {/* <div
//   className="absolute w-full h-full bg-center bg-no-repeat bg-contain"
//   style={{ backgroundImage: `url(${slide.image})` }}
// /> */}
//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-black/50" />
              
//               {/* Content */}
//               <div className="relative z-10 h-full flex flex-col justify-center px-16">
//                 <h2 className="text-white text-2xl md:text-5xl font-bold  mb-2">{slide.title}</h2>
//                 <p className="text-white/80 hidden md:flex text-xl max-w-2xl">{slide.description}</p>
//               </div>
//             </div>
//           ))}

//           {/* Navigation Buttons */}
//           <button 
//             onClick={prevSlide}
//             className="absolute left-4 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
//           >
//             <ChevronLeft className="w-6 h-6 text-white" />
//           </button>
//           <button 
//             onClick={nextSlide}
//             className="absolute right-4 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
//           >
//             <ChevronRight className="w-6 h-6 text-white" />
//           </button>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Cover;



import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Cover.css";

const TypewriterEffect = ({ slide }) => {
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let typingTimeout;

    const typeWriter = () => {
      if (charIndex <= slide.title.length) {
        setDisplayedTitle(slide.title.slice(0, charIndex));
        charIndex++;
        typingTimeout = setTimeout(typeWriter, 40); // Adjust typing speed here
      }
    };

    setDisplayedTitle(""); // Reset title before typing
    typeWriter();

    // Cleanup timeout to avoid memory leaks
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [slide]);

  return (
    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
      {displayedTitle}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </h2>
  );
};

function Cover() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Residential Building Design",
      description: "We offer Architectural Services for Commercial, Residential, Hospitality, Institutional and Recreational Projects",
      image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099090/Landscape_View_4_bpz3ea.jpg"
    },
    {
      title: "Commercial Buildings Design",
      description: "We offer Commercial building design, initial financial feasibility report, 3d visualisation of interior and exterior, VR walkthrough.",
      image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099079/Landscape_View_1_xo7e7q.jpg"
    },
    {
      title: "Hospitality and Religious Buildings",
      description: "We offer design solutions for hospitality buildings, such as hotels, resorts, spa, guest houses and religious buildings such as mosques, Imam Bargah, Shrines etc.",
      image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099045/1502_9_ikst8m.jpg"
    },
    {
      title: "Urban Planning and Landscaping",
      description: "We provide sustainable urban planning solutions and landscaping designs tailored to client needs.",
      image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099040/WhatsApp_Image_2021-01-06_at_10.34.18_1_n2xcpb.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <NavBar />
      <main className="flex justify-center w-full h-screen">
        <div className="w-full h-[100%] relative flex justify-start items-center overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out transform
                ${index === currentSlide ? "translate-x-0" : 
                  index < currentSlide ? "-translate-x-full" : "translate-x-full"}`}
            >
              {/* Background Image */}
              <div
                className="absolute w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-16">
                {/* Typewriter Effect */}
                <TypewriterEffect slide={slide} />
                <p className="text-white/80  text-sm md:text-xl max-w-2xl">{slide.description}</p>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </main>
    </>
  );
}

export default Cover;

