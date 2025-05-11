import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "C Language and DSA Through C++",
    company: "MySirG.com",
    date: "2023 - Present",
    certificate: "https://drive.google.com/file/d/1rBxWMNJrb5OxH44u25SiBSE2mDAWJOaB/view?usp=sharing",
    responsibilities: [
      "Practiced core programming with C and C++.",
      "Solved problems involving recursion, arrays, and linked lists.",
      "Understood concepts of pointers, memory, and OOP in C++."
    ]
  },
  {
    job: "Full Stack Web Development (Python, Django)",
    company: "MySirG.com",
    date: "2023 - Present",
    certificate: "https://drive.google.com/file/d/1CpLAG3mzCEae-HxtWsiouWLmbW_xbIY0/view?usp=sharing",
    responsibilities: [
      "Learned backend development using Django and Python.",
      "Created dynamic websites using Django templates and ORM.",
      "Implemented CRUD operations and RESTful APIs."
    ]
  },
  {
    job: "SQL: Basic to Advanced",
    company: "Simplilearn",
    date: "2023",
    certificate: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODExIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjkyNTczN18xNzIwODYwMzU5LnBuZyIsInVzZXJuYW1lIjoiU3VyeWF3YW5zaGkgU2FjaGluIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4309%2FIntroduction-to-SQL%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1446025852838175447&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz3aONPU19TJN8kmyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAMIlBKlBAAAA",
    responsibilities: [
      "Learned SQL queries for data extraction and manipulation.",
      "Worked with joins, group by, and subqueries.",
      "Practiced queries in MySQL and real-world exercises."
    ]
  },
  {
    job: "Linux and Operating Systems",
    company: "Great Learning",
    date: "2023",
    certificate: "https://www.linkedin.com/posts/sachin-suryawanshi-618ba0221_1000-free-courses-with-free-certificates-activity-7167216588910178305-MIdL/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfiAXQBr5QNiRW3jDBccPLz0-ig69bACVg",
    responsibilities: [
      "Gained basic understanding of Linux OS and file system.",
      "Learned Linux commands, shell scripting, and process management.",
      "Studied OS concepts like scheduling and memory management."
    ]
  },
  {
    job: "Data Science and Generative AI",
    company: "PW Skills",
    date: "2024 - Present",
    certificate: "#",
    responsibilities: [
      "Learned Python libraries like NumPy, Pandas, Matplotlib.",
      "Explored generative AI basics and prompt engineering.",
      "Built beginner-level models for data analysis."
    ]
  },
  {
    job: "Full Stack Web Development (MERN)",
    company: "PW Skills",
    date: "2023 - Present",
    certificate: "#",
    responsibilities: [
      "Built projects using MongoDB, Express.js, React.js, and Node.js.",
      "Practiced building scalable web apps with REST APIs and user auth.",
      "Applied best practices in frontend/backend integration."
    ]
  },
];

const AllExperiences = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-12">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center justify-center group"
        >
          <div className="relative w-full max-w-[340px]">
            <SingleExperience experience={experience} />
            <a 
              href={experience.certificate}
              className="absolute bottom-4 right-4 flex items-center gap-2 
                       text-cyan hover:text-orange transition-all duration-300
                       opacity-0 group-hover:opacity-100"
            >
              View Certificate
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllExperiences;
