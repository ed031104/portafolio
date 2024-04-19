import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="absolute  w-full   bg-slate-950  ">
      <div className="absolute inset-0 bg- backdrop-filter backdrop-blur-md opacity-60"></div>

      <div className=" relative flex justify-center p-5">
        <a
          href="https://www.linkedin.com/in/edwin-antonio-d%C3%A1vila-osorio-527877267/"
          className="text-2xl text-gray-400 hover:text-gray-100 bg-gray-700 rounded-full p-2 m-2"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/ed031104"
          className="text-2xl text-gray-400 hover:text-gray-100 bg-gray-700 rounded-full p-2 m-2"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-center p-4 text-white ">© 2024, All rights reserved</p>
    </footer>
  );
}
export default Footer;
