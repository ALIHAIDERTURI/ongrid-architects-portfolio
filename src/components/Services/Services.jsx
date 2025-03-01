import NavBar from "../NavBar/NavBar";
import ServiceCard from "./ServiceCard";
import servicesData from "./ServicesData.json";

function Services() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-between items-start w-[100%] px-2 md:w-[98%] my-[100px] mb-8">
        <h2 className="font-['Six_Caps'] text-6xl md:text-[4rem] font-thin uppercase text-black leading-none mb-8 w-full text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
