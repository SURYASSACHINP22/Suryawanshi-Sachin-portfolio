import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="Suryawanshsachinp07@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7620742214" Image={FiPhone} />
      <SingleInfo text="Bangalore, Karnataka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
