import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SkeletonLoader = () => (
  <div className="w-full h-full animate-pulse">
    {/* Background skeleton */}
    <div className="absolute inset-0 bg-gray-300" />

    {/* Content skeleton */}
    <div className="relative z-10 h-full flex flex-col justify-center px-16">
      {/* Title skeleton */}
      <div className="h-12 bg-gray-400 rounded-lg w-2/3 max-w-lg mb-4" />

      {/* Description skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-400 rounded w-full max-w-2xl" />
        <div className="h-4 bg-gray-400 rounded w-5/6 max-w-xl" />
      </div>
    </div>

    {/* Navigation button skeletons */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-700 rounded-full" />
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-700 rounded-full" />
  </div>
);

const TypewriterEffect = ({ slide }) => {
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let typingTimeout;

    const typeWriter = () => {
      if (charIndex <= slide.title.length) {
        setDisplayedTitle(slide.title.slice(0, charIndex));
        charIndex++;
        typingTimeout = setTimeout(typeWriter, 40);
      }
    };

    setDisplayedTitle("");
    typeWriter();

    return () => clearTimeout(typingTimeout);
  }, [slide]);

  return (
    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
      {displayedTitle}
      <span className="animate-blink">|</span>
    </h2>
  );
};

function Cover() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingImages, setLoadingImages] = useState(new Set());
  const [loadedImages, setLoadedImages] = useState(new Set());

  const slides = [
    {
      title: "Residential Building Design",
      description: "We offer Architectural Services for Commercial, Residential, Hospitality, Institutional and Recreational Projects",
      image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099062/UPDATEDED_VIEW_x5v8qf.jpg"
    },
    {
      title: "Commercial Buildings Design",
      description: "We offer Commercial building design, initial financial feasibility report, 3d visualisation of interior and exterior, VR walkthrough.",
      image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099033/ALEX-PROJECT_01_ziqdcj.jpg"
    },
    {
      title: "Institutional Buildings Design",
      description: "We offer design solutions for hospitality buildings, such as hotels, resorts, spa, guest houses and religious buildings such as mosques, Imam Bargah, Shrines etc.",
      image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099061/HAPPY_HOME_SCHOOL_eborex.jpg"
    },
    {
      title: "Interior Designing",
      description: "We provide sustainable urban planning solutions and landscaping designs tailored to client needs.",
      image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099039/IMG-20210426-WA0065_juwd9w.jpg"
    }
  ];

  // Load images progressively
  useEffect(() => {
    const loadImage = (src) => {
      if (loadedImages.has(src) || loadingImages.has(src)) return;

      setLoadingImages(prev => new Set(prev).add(src));

      const img = new Image();
      img.src = src;

      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(src));
        setLoadingImages(prev => {
          const next = new Set(prev);
          next.delete(src);
          return next;
        });
      };

      img.onerror = () => {
        setLoadingImages(prev => {
          const next = new Set(prev);
          next.delete(src);
          return next;
        });
      };
    };

    // Load current slide image first
    loadImage(slides[currentSlide].image);

    // Then preload next slide
    const nextSlide = (currentSlide + 1) % slides.length;
    loadImage(slides[nextSlide].image);
  }, [currentSlide, loadedImages, loadingImages]);

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
        <div className="w-full h-[92%] relative flex justify-start items-center overflow-hidden">
          {slides.map((slide, index) => {
            const isImageLoaded = loadedImages.has(slide.image);

            return (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out transform
                  ${index === currentSlide ? "translate-x-0 opacity-100" : 
                    index < currentSlide ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"}`}
              >
                {!isImageLoaded && index === currentSlide ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    {/* Background Image */}
                    <div
                      className="absolute w-full h-full bg-cover bg-center transition-opacity duration-300"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        opacity: isImageLoaded ? 1 : 0
                      }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-16">
                      <TypewriterEffect slide={slide} />
                      <p className="text-white/80 text-sm md:text-xl max-w-2xl">
                        {slide.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}

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



// import React, { useState, useEffect } from "react";
// import NavBar from "../NavBar/NavBar";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import SkeletonImage from "../SkeletonLoader/skeletonLoader"; // Import your reusable SkeletonImage component

// const TypewriterEffect = ({ slide }) => {
//   const [displayedTitle, setDisplayedTitle] = useState("");

//   useEffect(() => {
//     let charIndex = 0;
//     let typingTimeout;

//     const typeWriter = () => {
//       if (charIndex <= slide.title.length) {
//         setDisplayedTitle(slide.title.slice(0, charIndex));
//         charIndex++;
//         typingTimeout = setTimeout(typeWriter, 40);
//       }
//     };

//     setDisplayedTitle("");
//     typeWriter();

//     return () => clearTimeout(typingTimeout);
//   }, [slide]);

//   return (
//     <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
//       {displayedTitle}
//       <span className="animate-blink">|</span>
//     </h2>
//   );
// };

// function Cover() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Residential Building Design",
//       description:
//         "We offer Architectural Services for Commercial, Residential, Hospitality, Institutional and Recreational Projects",
//       image:
//         "https://res.cloudinary.com/ongridarchitects/image/upload/q_auto,f_auto,w_1920/v1734099090/Landscape_View_4_bpz3ea.jpg",
//     },
//     {
//       title: "Commercial Buildings Design",
//       description:
//         "We offer Commercial building design, initial financial feasibility report, 3d visualisation of interior and exterior, VR walkthrough.",
//       image:
//         "https://res.cloudinary.com/ongridarchitects/image/upload/q_auto,f_auto,w_1920/v1734099079/Landscape_View_1_xo7e7q.jpg",
//     },
//     {
//       title: "Hospitality and Religious Buildings",
//       description:
//         "We offer design solutions for hospitality buildings, such as hotels, resorts, spa, guest houses and religious buildings such as mosques, Imam Bargah, Shrines etc.",
//       image:
//         "https://res.cloudinary.com/ongridarchitects/image/upload/q_auto,f_auto,w_1920/v1734099045/1502_9_ikst8m.jpg",
//     },
//     {
//       title: "Urban Planning and Landscaping",
//       description:
//         "We provide sustainable urban planning solutions and landscaping designs tailored to client needs.",
//       image:
//         "https://res.cloudinary.com/ongridarchitects/image/upload/q_auto,f_auto,w_1920/v1734099040/WhatsApp_Image_2021-01-06_at_10.34.18_1_n2xcpb.jpg",
//     },
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
//         <div className="w-full h-[92%] relative flex justify-start items-center overflow-hidden">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
//                 index === currentSlide
//                   ? "translate-x-0 opacity-100"
//                   : index < currentSlide
//                   ? "-translate-x-full opacity-0"
//                   : "translate-x-full opacity-0"
//               }`}
//             >
//               <SkeletonImage
//                 src={slide.image}
//                 isBackground={true}
//                 className="w-full h-full bg-cover bg-center transition-opacity duration-300"
//               >
//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/50" />

//                 {/* Content */}
//                 <div className="relative z-10 h-full flex flex-col justify-center px-16">
//                   <TypewriterEffect slide={slide} />
//                   <p className="text-white/80 text-sm md:text-xl max-w-2xl">
//                     {slide.description}
//                   </p>
//                 </div>
//               </SkeletonImage>
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
