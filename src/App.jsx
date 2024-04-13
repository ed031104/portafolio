import NavBar from "./NavBar";
import {FaArrowUp} from "react-icons/fa";
import Presentacion from "./Presentacion";
import Skills from "./Skills";
import Footer from "./Footer";
import Project from "./Project";
import { useRef } from "react";

export function App() {

  const mainRef = useRef(null);

  const scrollToTop = () => {
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main ref={mainRef} className=" bg-gradient-to-r from-gray-600 to-gray-900 scroll-smooth">
        <Presentacion />
        <Skills />

        <div className=" p-10 py-56 ">
          <h1 className=" text-white text-center text-4xl font-bold ">
            Proyectos
          </h1>
          <div className=" flex flex-wrap justify-around gap-16 m-10 py-10">
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      
      <div className="flex justify-center  p-10" >
        <button className="flex justify-center items-center bg-slate-900 h-16 w-16 rounded-full " onClick={scrollToTop}>
          <FaArrowUp className="text-white text-2xl " />
        </button>
      </div>
      </main>
      <Footer />
      
    </>
  );
}
