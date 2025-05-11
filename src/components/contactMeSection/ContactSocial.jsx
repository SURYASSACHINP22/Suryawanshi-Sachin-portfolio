import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sachin-suryawanshi-618ba0221/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/SURYASSACHINP22" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/SachinSurya/" Icon={SiLeetcode} />
    </div>
  );
};

export default ContactSocial;
