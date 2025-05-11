import { useState } from 'react';

const SubSkills = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error('Failed to load subSkills image');
  };

  return (
    <div className="border-y-2 border-lightGrey relative">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      {!imageError ? (
        <img
          src="/images/subSkills.jpg"
          alt="subSkills image"
          className=""
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default SubSkills;
