// import NavBar from "../NavBar/NavBar";
// import "./About.css";

// function About() {
//     // extract project id from params

//     return (
//         <>
//             <NavBar />

//             <section className="about-page-main-title">
//                 <h2>About me</h2>
//             </section>

//             <section className="about-container">
//                 <section className="about-photo">
//                     <img src="/images/mehdi_pic.jpg" alt="Architect Photo" />
//                 </section>

//                 <section className="about-txt">
//                     <p>
//                         I’m an architect, designer, and technologist with
//                         multidisciplinary expertise spanning computational
//                         design, digital fabrication, and advanced project
//                         management. With over a decade in the industry, I’ve
//                         applied cutting-edge tools and techniques to
//                         architectural projects, including the preliminary design
//                         of Amsterdam’s 3D-printed bridge—a project realized
//                         through complex optimization algorithms. My work also
//                         includes high-profile initiatives like the Neom master
//                         plan and the German Expo pavilion in Dubai, where I
//                         brought innovative thinking to large-scale urban and
//                         exhibition spaces.
//                     </p>
//                     <p>
//                         In addition to my design expertise, I honed my project
//                         management skills while leading engineering teams at
//                         Tesla's Berlin Gigafactory. There, I played an
//                         instrumental role in driving complex projects to
//                         completion, effectively balancing technical challenges
//                         with tight timelines. This role required not only
//                         technical precision but also a strong aptitude for
//                         problem-solving and adaptability—skills I bring to every
//                         project.
//                     </p>
//                     <p>
//                         Now based in Berlin, I’m exploring new realms in Project
//                         Management, AI, driven by a passion for creating
//                         impactful, future-oriented solutions. My career reflects
//                         a continuous commitment to bridging architecture,
//                         technology, and entrepreneurial innovation, and I’m
//                         constantly pushing the boundaries of what design can
//                         achieve.
//                     </p>
//                 </section>
//             </section>
//         </>
//     );
// }

// export default About;

import NavBar from "../NavBar/NavBar";

function About() {
  return (
    <>
      <NavBar />

      <section className="flex flex-col justify-between items-start w-[98%] md:w-[98%] mx-auto my-[100px] mb-8">
        <h2 className="font-['Six_Caps'] text-6xl md:text-[4rem] font-thin uppercase text-black leading-none mb-0">
          About me
        </h2>
      </section>

      <section className="w-[98%] md:w-[98%] mx-auto flex flex-col md:flex-row justify-center items-start">
        {/* <section className="w-full md:w-[35%]">
          <img
            src="/images/mehdi_pic.jpg"
            alt="Architect Photo"
            className="w-full rounded-[10px]"
          />
        </section> */}

        <section className="w-full  text-justify">
          <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
            I'm an architect, designer, and technologist with multidisciplinary
            expertise spanning computational design, digital fabrication, and
            advanced project management. With over a decade in the industry,
            I've applied cutting-edge tools and techniques to architectural
            projects, including the preliminary design of Amsterdam's 3D-printed
            bridge—a project realized through complex optimization algorithms.
            My work also includes high-profile initiatives like the Neom master
            plan and the German Expo pavilion in Dubai, where I brought
            innovative thinking to large-scale urban and exhibition spaces.
          </p>
          <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
            In addition to my design expertise, I honed my project management
            skills while leading engineering teams at Tesla's Berlin
            Gigafactory. There, I played an instrumental role in driving complex
            projects to completion, effectively balancing technical challenges
            with tight timelines. This role required not only technical
            precision but also a strong aptitude for problem-solving and
            adaptability—skills I bring to every project.
          </p>
          <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
            Now based in Berlin, I'm exploring new realms in Project Management,
            AI, driven by a passion for creating impactful, future-oriented
            solutions. My career reflects a continuous commitment to bridging
            architecture, technology, and entrepreneurial innovation, and I'm
            constantly pushing the boundaries of what design can achieve.
          </p>
        </section>
      </section>

      <section className="flex flex-col justify-between items-start w-[98%] md:w-[98%] mx-auto my-[100px] mb-8">
        <h2 className="font-['Six_Caps'] text-6xl md:text-[4rem] font-thin uppercase text-black leading-none mb-3">
          Our Services
        </h2>

        <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
          We provide a wide range of services including architectural design,
          interior design, urban planning, and project management. Our team of
          experts is dedicated to delivering high-quality solutions that meet
          the needs of our clients. Whether you're looking to build a new home,
          renovate an existing space, or develop a large-scale project, we have
          the skills and experience to bring your vision to life. Contact us
          today to learn more about our services and how we can help you achieve
          your goals.
        </p>
        <p className="mb-5 text-xl font-extralight text-black font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
          Our team of experts is dedicated to delivering high-quality solutions
          that meet the needs of our clients. Whether you're looking to build a
          new home, renovate an existing space, or develop a large-scale
          project, we have the skills and experience to bring your vision to
          life. Contact us today to learn more about our services and how we can
          help you achieve your goals.
        </p>
      </section>
    </>
  );
}

export default About;
