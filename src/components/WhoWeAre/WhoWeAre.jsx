import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";

// Skeleton loader for the profile image and content
const ProfileSkeleton = () => (
  <div className="w-full animate-pulse">
    {/* Profile image skeleton */}
    <section className="w-full md:w-[35%] flex justify-center items-center mx-auto mb-8">
      <div className="w-[300px] h-[300px] bg-gray-300 rounded-full" />
    </section>

    {/* Content skeleton */}
    <section className="w-full">
      {/* Name and title skeleton */}
      <div className="flex flex-col items-center md:items-start mb-6">
        <div className="h-8 bg-gray-400 rounded-lg w-64 mb-3" />
        <div className="h-5 bg-gray-400 rounded-lg w-48" />
      </div>

      {/* Paragraphs skeleton */}
      <div className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="space-y-3">
            <div className="h-4 bg-gray-400 rounded w-full" />
            <div className="h-4 bg-gray-400 rounded w-full" />
            <div className="h-4 bg-gray-400 rounded w-5/6" />
            <div className="h-4 bg-gray-400 rounded w-4/6" />
          </div>
        ))}
      </div>
    </section>
  </div>
);

const WhoWeAre = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Load profile image
  useEffect(() => {
    const profileImg = new Image();
    profileImg.src = "/images/mehdi_pic.jpg";
    
    profileImg.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="h-fit mb-[50px] px-2 md:px-4">
        <section className="flex flex-col justify-between items-center w-full mx-auto md:my-[50px] my-[50px] mb-8">
        </section>

        <section className="w-full mx-auto flex gap-6 flex-col md:flex-row justify-center items-start">
          <section className="w-full md:w-[35%] flex justify-center items-center">
            <div className="relative w-[300px] h-[300px]">
              {/* Image skeleton loader */}
              {!imageLoaded && (
                <div className="absolute inset-0 w-[300px] h-[300px] bg-gray-300 rounded-full animate-pulse" />
              )}
              <img
                src="/images/mehdi_pic.jpg"
                alt="Architect Photo"
                className={`w-[300px] h-[300px] object-fit rounded-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </section>

          <section className="w-full text-justify">
            <h1 className="font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif] md:text-[2rem] font-semi-bold text-black mb-5 leading-none text-center md:text-left">
              Mehdi Hussain <br /><span className="font-thin md:text-[24px]  ">Founder - Principal Architect</span>{" "}
            </h1>
            <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
            Mehdi Hussain is a seasoned architect and the visionary founder of OnGrid Architects, with a robust career spanning over 12 years in the dynamic field of architectural design. Based in the vibrant city of Dubai, Mehdi has built a diverse portfolio collaborating with some of the most prestigious international architecture firms. His comprehensive experience encompasses a wide array of project types, including residential, commercial, hospitality, and interior design, showcasing his versatility and expertise in creating impactful spaces.

            </p>
            <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
            Throughout his career, Mehdi has been deeply involved in all stages of the architectural process, from initial conceptualization to final execution. His keen eye for detail, combined with a strong understanding of client needs, enables him to craft innovative design solutions that not only meet functional requirements but also enhance the aesthetic qualities of each project. Whether designing luxurious residential properties, cutting-edge commercial spaces, or immersive hospitality venues, Mehdi approaches each project with a commitment to sustainability and context-driven design.

            </p>
            <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
            As the founder of OnGrid Architects, Mehdi leads a talented and dedicated team, fostering an environment of creativity and collaboration. Under his guidance, the firm has developed a reputation for excellence, delivering work that stands out in both concept and execution. Mehdi's passion for architecture is matched by his belief in the power of design to transform lives and communities, ensuring that every project reflects a thoughtful approach to the environment and its inhabitants.

            </p>
            <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
            Beyond his architectural practice, Mehdi is an advocate for continuous learning and professional development in the field. He actively participates in industry events, workshops, and seminars, staying abreast of emerging trends and technologies. This commitment to growth not only enriches his practice but also inspires his team to push boundaries and explore innovative design possibilities.
            </p>
            <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
            Mehdi Hussain's dedication to creating exceptional spaces is evident in every project he undertakes. His holistic design philosophy integrates functionality, sustainability, and beauty, ensuring that every environment is not just a place to live or work, but a space that inspires and uplifts. With a passion for architecture that is both profound and infectious, Mehdi is redefining the architectural landscape, one project at a time.
            </p>
          </section>
        </section>
      </div>
    </>
  );
};

export default WhoWeAre;
