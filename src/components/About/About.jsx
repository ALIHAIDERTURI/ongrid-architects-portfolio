import NavBar from "../NavBar/NavBar";

function About() {
  return (
    <>
      <NavBar />

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
