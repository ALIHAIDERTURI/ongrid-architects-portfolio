import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const OurTeam = () => {
  return (
    <>
    <NavBar />
      <div className=" w-screen flex justify-center items-center">
        <h2 className="font-['Six_Caps'] text-6xl md:text-[4rem] font-thin uppercase text-black leading-none my-[100px]">
          Our Team
        </h2>
      </div>
      <section className="w-screen h-fit flex justify-center items-center">
        <img
          src="/images/mehdi_pic.jpg"
          alt="Architect Photo"
          className="w-[300px] h-[300px] object-cover rounded-full"
        />
      </section>
      <Footer/>
    </>
  );
};
export default OurTeam;
