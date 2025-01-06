// import React from "react";
// import "./MouseIcon.css";

// function MouseIcon() {
//     return (
//         <div className="mouse-icon-wrapper">
//             <img
//                 src="images/mouse-scroll.svg"
//                 alt="mouse-icon"
//                 className="mouse-icon"
//             />
//         </div>
//     );
// }

// export default MouseIcon;


import React from "react";

// Define the keyframes animation
const shakeVerticalAnimation = `
@keyframes shake-vertical {
  0%, 100% { transform: translateY(0); }
  10%, 30%, 50%, 70% { transform: translateY(-3px); }
  20%, 40%, 60% { transform: translateY(3px); }
  80% { transform: translateY(2.4px); }
  90% { transform: translateY(-2.4px); }
}`;

const MouseIcon = () => {
  return (
    <>
      {/* Add the animation styles */}
      <style>{shakeVerticalAnimation}</style>
      
      {/* Main wrapper */}
      <div className="relative flex justify-center items-center w-full h-[100px] leading-[80px]">
        {/* Mouse icon image */}
        <img
          src="images/mouse-scroll.svg"
          alt="mouse-icon"
          className="w-[30px]"
        />
        
        {/* Animated dot */}
        <div 
          className="absolute h-[5px] w-[5px] top-1/2 left-1/2 -ml-[2.5px] -mt-[2.5px] rounded-full bg-white"
          style={{
            animation: 'shake-vertical 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both'
          }}
        />
      </div>
    </>
  );
};

export default MouseIcon;