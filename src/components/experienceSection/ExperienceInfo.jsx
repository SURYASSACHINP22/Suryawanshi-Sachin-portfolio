const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-2xl text-cyan uppercase pb-3 ">{text}</p>
      <p className="font-bold text-xl text-lightGrey uppercase -mt-4">{number}</p>
    </div>
  );
};

export default ExperienceInfo;
