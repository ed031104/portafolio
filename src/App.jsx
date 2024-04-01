import NavBar from "./NavBar";
import Presentacion from "./Presentacion";
import Skills from "./Skills";
import Footer from "./Footer";
import Project from "./Project";

export function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className=" bg-gradient-to-r from-gray-600 to-gray-900">
        <Presentacion />
        <Skills />

        <div className=" p-10 py-56">
          <h1 className=" text-white text-center text-4xl font-bold ">
            Proyectos
          </h1>
          <div className=" grid content-center mx-auto my-auto gap-4 space-y-7 mt-20 pb-10 place-items-center sm:grid-cols-2 lg:grid-cols-3  
             
          ">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </main>

      <Footer />
      
    </>
  );
}
