import { FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiSpring,
  SiJavascript,
  SiCsharp,
  SiDotnet,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";

function Skills() {
  return (
    <div className=" m-10 shadow-2xl rounded-lg  ">
      <h1 className="text-white text-4xl font-bold text-center p-16 ">
        Tecnologías y Habilidades
      </h1>
      <div className="p-10 grid-cols-4 gap-4 grid place-items-center space-x-5 space-y-10  ">
        <FaJava className="text-red-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiSpring className="text-green-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiJavascript className="text-yellow-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiCsharp className="text-blue-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiDotnet className="text-purple-400 text-5xl sm:text-7xl md:text-8xl" />
        <FaGitAlt className="text-orange-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiMysql className="text-blue-400 text-5xl sm:text-7xl md:text-8xl" />
        <SiNodedotjs className="text-green-400 text-5xl sm:text-7xl md:text-8xl" />
      </div>
    </div>
  );
}
export default Skills;
