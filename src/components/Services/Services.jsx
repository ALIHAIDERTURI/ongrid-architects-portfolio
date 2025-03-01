import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from 'react';

const servicesData = [
  {
    title: "Residentail Design",
    description: " Creating beautiful and functional residential spaces that reflect your unique lifestyle and personality, ensuring that your home is a true reflection of you.",
    image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099062/UPDATEDED_VIEW_x5v8qf.jpg" // You'll need to add these images to your public folder
  },
  {
    title: "Interior Design",
    description: "Interior design services that transform your space into a reflection of your personal style and taste, creating a harmonious and inviting environment.",
    image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099039/IMG-20210426-WA0065_juwd9w.jpg"
  },
  {
    title: "Commercial Design",
    description: "Designing dynamic and engaging commercial spaces that enhance your brand identity and create memorable experiences for your customers.",
    image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1734099033/ALEX-PROJECT_01_ziqdcj.jpg"
  },
  {
    title: "Project Management",
    description: " Providing comprehensive project management services to ensure that your project is delivered on time, within budget, and to the highest quality standards.",
    image: "https://res.cloudinary.com/ongridarchitects/image/upload/v1740757929/managmenet_service_zl2luv.jpg"
  }
];

// Service Card component with built-in skeleton loader
const ServiceCard = ({ service, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = service.image;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [service.image]);

  return (
    <div 
      key={index}
      className="relative group h-[400px] overflow-hidden rounded-lg shadow-lg"
    >
      {/* Skeleton loader - styled to match Cover.jsx */}
      {!imageLoaded && (
        <div className="w-full h-full animate-pulse">
          {/* Background skeleton */}
          <div className="absolute inset-0 bg-gray-300" />
          
          {/* Content skeleton */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            {/* Title skeleton */}
            <div className="h-8 bg-gray-400 rounded-lg w-2/3 mb-4" />
            
            {/* Description skeleton */}
            <div className="space-y-3">
              <div className="h-3 bg-gray-400 rounded w-full" />
              <div className="h-3 bg-gray-400 rounded w-5/6" />
              <div className="h-3 bg-gray-400 rounded w-4/6" />
            </div>
          </div>
        </div>
      )}
      
      {/* Actual content - hidden until image is loaded */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${service.image})`, transition: 'opacity 0.5s ease-in-out' }}
      />
      <div className={`absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-60 ${imageLoaded ? 'opacity-40' : 'opacity-0'}`} />
      <div className={`absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-white text-2xl font-semibold mb-2">
          {service.title}
        </h3>
        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.description}
        </p>
      </div>
    </div>
  );
};

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
