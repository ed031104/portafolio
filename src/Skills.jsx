import { FaJava, FaGitAlt, FaReact  } from "react-icons/fa";
import {
  SiSpring,
  SiJavascript,
  SiCsharp,
  SiDotnet,
  SiMysql,
  SiNodedotjs,
  SiPostman ,
  SiExpress ,
  SiMongodb ,
} from "react-icons/si";

function Skills() {
  return (
    <div className="flex flex-col gap-16 m-10 py-10 justify-center shadow-2xl shadow-black rounded-lg over  ">
      <h1 className="text-white text-4xl font-bold text-center p-2 ">
        Tecnologías y Habilidades
      </h1>
      <div className="flex justify-around flex-wrap gap-16 px-10 md:gap-x-72 m-10">
        <FaJava className="  transition duration-300 ease-in-out transform hover:scale-110 text-red-400 text-5xl sm:text-7xl md:text-8xl "/>
        <SiSpring className="   transition duration-300 ease-in-out transform hover:scale-110 text-green-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiJavascript className="transition duration-300 ease-in-out transform hover:scale-110 text-yellow-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiCsharp className="transition duration-300 ease-in-out transform hover:scale-110 text-blue-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiDotnet className="transition duration-300 ease-in-out transform hover:scale-110 text-purple-400 text-5xl sm:text-7xl md:text-8xl" />
        <FaGitAlt className="transition duration-300 ease-in-out transform hover:scale-110 text-orange-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiMysql className="transition duration-300 ease-in-out transform hover:scale-110 text-blue-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiNodedotjs className="transition duration-300 ease-in-out transform hover:scale-110 text-green-400 text-5xl sm:text-7xl md:text-8xl" />
        <FaReact className="transition duration-300 ease-in-out transform hover:scale-110 text-blue-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiPostman className="transition duration-300 ease-in-out transform hover:scale-110 text-orange-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiExpress className="transition duration-300 ease-in-out transform hover:scale-110 text-slate-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiMongodb className="transition duration-300 ease-in-out transform hover:scale-110 text-green-400 text-5xl sm:text-7xl md:text-8xl" />
      </div>
    </div>
  );
}
export default Skills;