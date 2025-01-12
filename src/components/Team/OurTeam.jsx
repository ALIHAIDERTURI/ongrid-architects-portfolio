import NavBar from "../NavBar/NavBar";
import { useState } from "react";

const OurTeam = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <NavBar />
      <div className="h-screen">
      <div className="w-screen flex justify-center items-center">
        <h2 className="font-['Six_Caps'] text-6xl md:text-[4rem] font-thin uppercase text-black leading-none my-[50px]">
          Our Team
        </h2>
      </div>
      <section className="w-screen h-fit mb-[50px] flex justify-center items-center">
        <img
          src="/images/mehdi_pic.jpg"
          alt="Architect Photo"
          className={`w-[300px] h-[300px] object-cover rounded-lg shadow-lg transition-transform duration-300 ${
            hover ? "transform scale-110" : ""
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </section>
      </div>
    </>
  );
};

export default OurTeam;
