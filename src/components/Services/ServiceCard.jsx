import { useEffect, useState } from 'react';


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
        <h3 className="text-white text-2xl font-semibold mb-2 h-[32px] flex items-center">
          {service.title}
        </h3>
        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;