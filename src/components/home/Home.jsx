import NavBar from "../../components/NavBar";
import {
  FaArrowUp,
  FaJava,
  FaGitAlt,
  FaReact,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  SiSpring,
  SiJavascript,
  SiCsharp,
  SiDotnet,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import fotoPerfil from "../../static/fotoPerfil.png";
import Footer from "../../components/Footer";
import Project from "../../components/Project";
import { FaFilePdf } from "react-icons/fa6";

export function App() {
  const scrollTosection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollMain = () => scrollTosection("inicio");

  return (
    <>
      <header id="inicio">
        <NavBar />
      </header>

      <main className="bg-gradient-to-r from-slate-900 to-slate-950">

        <section>
          <div className="h-dvh flex flex-col  justify-around py-16 items-center lg:flex-row">
            <div className="flex justify-center ">
              <div className=" grid grid-flow-col grid-rows-2 grid-cols-3 gap-10 place-items-start animate-pulse">
                <div className="transform scale-110 -rotate-6">
                  <FaJava className="   transition duration-300 ease-in-out transform hover:scale-110 text-red-400 text-7xl sm:text-8xl " />
                </div>
                <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                  <FaReact className="   transition duration-300 ease-in-out transform hover:scale-110 text-blue-600 text-7xl sm:text-8xl " />
                </div>
                <div className="transform  translate-y-11">
                  <SiSpring className="   transition duration-300 ease-in-out transform hover:scale-110 text-green-400 text-7xl sm:text-8xl " />
                </div>
                <div className="transform translate-y-24">
                  <SiMysql className="transition duration-300 ease-in-out transform hover:scale-110 text-blue-400 text-7xl sm:text-8xl " />
                </div>
                <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                  <SiCsharp className="transition duration-300 ease-in-out transform hover:scale-110 text-purple-600 text-7xl sm:text-8xl " />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col justify-center">
                <h1
                  className="text-6xl tracking-tighter sm:text-7xl md:text-7xl text-transparent bg-clip-text font-bold  bg-gradient-to-r
               from-blue-200 to-blue-800/50 "
                >
                  Edwin Dávila
                </h1>
                <p className="text-gray-400 text-center text-xl md:text-xl lg:text-2xl lg:text-left  dark:text-gray-400">
                  Desarrollador Backend.
                </p>
                <div className="flex justify-center lg:justify-start ">
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
                  <a
                    href="/src/static/cv.pdf"
                    className="text-2xl text-gray-400 hover:text-gray-100 bg-gray-700 rounded-full p-2 m-2"
                    download={"cv"}
                  >
                    <FaFilePdf />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="sobre mi">
          <article className="h-dvh flex flex-col justify-around gap-20 lg:flex-row ">
            <div className="flex justify-center items-center">
              <span className="flex bg-slate-800 h-50 w-50 rounded-full ">
                <img
                  src={fotoPerfil}
                  className="h-30 w-30 rounded-full shadow-xl shadow-purple-950/30"
                />
              </span>
            </div>
            <div className="flex flex-col gap-8  justify-center items-center lg:items-start">
              <h2 className="text-purple-50 font-semibold text-4xl text-center">
                👋 Hola, soy Edwin Dávila
              </h2>
              <p className="text-white text-center">
                Soy desarrollador backend con experiencia en Java con Spring
                framework
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-gray-400 text-xl">
                  👨‍💻 Desarrollador Backend
                </li>
                <li className="text-gray-400 text-xl">📍 Nicaragua</li>
                <li className="text-gray-400 text-xl">
                  🎓 Estudiante de Ingeniería de Sistemas
                </li>
                <li className=""> </li>
              </ul>
            </div>
          </article>
        </section>


        <section id="tecnologias" className="mt-32 ">
          <div className=" h-auto flex flex-col gap-16 m-10 py-10 justify-center shadow-2xl shadow-black rounded-lg over  ">
            <h1 className="text-white text-4xl font-bold text-center p-2 ">
              Tecnologías y Habilidades
            </h1>
            <div className="flex justify-around flex-wrap gap-16 px-10 md:gap-x-72 m-10">
              <FaJava className="  transition duration-300 ease-in-out transform hover:scale-110 text-red-400 text-5xl sm:text-7xl md:text-8xl " />
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
        </section>

        <section id="Proyectos" className="pt-24" >
          <div className="h-auto flex items-center justify-center ">
          <div className="p-10 lg:flex-row justify-center items-center">
            <h1 className=" text-white text-center text-4xl font-bold ">
              Proyectos
            </h1>
            <div className=" flex flex-wrap justify-around gap-16 m-10 py-10">
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />

            </div>
          </div>
          </div>
        </section>

      </main>

      <div className=" flex justify-center pt-24 p-10">
            <button
              className="flex justify-center items-center shadow-2xl shadow-purple-600 bg-slate-900 h-16 w-16 rounded-full animate-bounce "
              onClick={scrollMain}
            >
              <FaArrowUp className="text-white text-2xl " />
            </button>
      </div>
      <Footer/>
    </>
  );
}
