import {
  FaCopyright,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import kickslogo from "../assets/kickslogo.png";

const Footer = () => {
  const thisYear = new Date();
  return (
    <footer className="md:py-8 px-[15%] sm:py-4 py-2 flex flex-col gap-8 sm:flex bg-[#191818]">
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-6">
        <img src={kickslogo} alt="" srcset="" width={60} />
        <ul className="text-white font-semibold md:text-xl flex flex-wrap justify-center gap-6">
          <li>Home</li>
          <li>Movies</li>
          <li>Terms</li>
          <li>Contact Us</li>
        </ul>
        <div className="text-white flex gap-6">
          <FaTwitter size={25} />
          <FaFacebook size={25} />
          <FaInstagramSquare size={25} />
        </div>
      </div>
      <p className="text-white/40 flex items-center m-auto">
        <FaCopyright className="mr-2" /> Copyright - Nathanael{" "}
        {thisYear.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
