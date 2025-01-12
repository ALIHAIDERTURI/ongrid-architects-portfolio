import React, { useState, useEffect } from 'react';

const SkeletonImage = ({ 
  src, 
  isBackground = false,
  containerClassName = '',
  className = '',
  style = {},
  // New prop for custom skeleton template
  SkeletonTemplate = DefaultSkeletonTemplate,
  children 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setError(true);
    };
  }, [src]);

  return (
    <div 
      className={`relative overflow-hidden ${containerClassName}`}
      style={style}
    >
      {/* Show skeleton while loading */}
      {isLoading && <SkeletonTemplate />}
      
      {/* Actual content */}
      {!isLoading && !error && (
        <>
          {isBackground ? (
            <div
              className={`w-full h-full bg-cover bg-center transition-opacity duration-300 ${className}`}
              style={{
                backgroundImage: `url(${src})`,
                opacity: isLoading ? 0 : 1,
                ...style
              }}
            />
          ) : (
            <img
              src={src}
              className={`transition-opacity duration-300 ${className}`}
              style={{
                opacity: isLoading ? 0 : 1,
                ...style
              }}
            />
          )}
          {children}
        </>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-400">
          Failed to load image
        </div>
      )}
    </div>
  );
};

// Default skeleton template that matches your original design
const DefaultSkeletonTemplate = () => (
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

export default SkeletonImage;


  