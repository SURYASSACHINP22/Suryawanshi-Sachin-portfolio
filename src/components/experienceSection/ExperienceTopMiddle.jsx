import { useState } from 'react';

const ExperienceTopMiddle = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error('Failed to load experience image');
  };

  return (
    <div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
      {!imageError ? (
        <img 
          src="./images/experience-image.png" 
          alt="my experience"
          onError={handleImageError}
          className="w-full h-auto object-contain"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
          <span className="text-gray-500">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default ExperienceTopMiddle;
