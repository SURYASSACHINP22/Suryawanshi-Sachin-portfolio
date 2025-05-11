import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px] relative group border border-lightBrown p-4 rounded-xl hover:border-cyan transition-all duration-300">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        SkillCraft Technology ltd
      </p>

      <ExperienceInfo number="" text="SDE - Intern" />

      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2024" text="sept" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="2024" text="Oct" />
      </div>
      
      <p className="text-center mb-12">
        I deliver innovative, high-quality solutions by leveraging MERN, Django,
        and Generative AI with confidence and expertise
      </p>

      <div className="absolute bottom-4 right-4 w-full flex justify-end px-4">
        <a
          href="https://drive.google.com/file/d/1Y4yJz1yp_Ig9EOZPjNfWoGjZqC1ALx8T/view?usp=sharing"
          className="text-cyan hover:text-orange transition-all duration-300
                    opacity-0 group-hover:opacity-100 flex items-center gap-2"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default ExperienceTopLeft;
