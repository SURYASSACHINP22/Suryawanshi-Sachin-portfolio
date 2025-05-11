const SingleExperience = ({ experience }) => {
  return (
    <div className="w-full min-h-[300px] border-2 border-orange border-dashed 
                    rounded-2xl p-6 group-hover:border-cyan transition-all duration-300
                    hover:shadow-cyanShadow">
      <p className="font-bold text-xl text-cyan mb-2">{experience.job}</p>
      <p className="text-orange text-lg mb-1">{experience.company}</p>
      <p className="text-lightGrey mb-4">{experience.date}</p>
      <ul className="list-disc pl-4 space-y-2">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="text-sm text-white/80">{resp}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleExperience;
