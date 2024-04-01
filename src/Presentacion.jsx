function Presentacion() {
  return (
    <section className="w-full py-28 md:py-28 lg:py-48 flex justify-center ">
      <div className="container flex flex-col gap-10 px- text-center md:px- lg:flex-row md:items-center ">
        <div className="mx-auto max-w-[700px] md:text-left space-y-8">
          <h1 className="text-4xl tracking-tighter sm:text-5xl md:text-7xl text-transparent bg-clip-text font-bold tex bg-gradient-to-r from-blue-200 to-blue-800/50 ">
            Desarrollador Backend
          </h1>
          <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            ¡Bienvenido a mi portafolio! Soy un apasionado desarrollador backend
            con experiencia significativa en diversas tecnologías clave,
            incluyendo Java, C#, Spring, SQL y JavaScript. A lo largo de mi
            carrera, he trabajado en una variedad de proyectos emocionantes y
            desafiantes, contribuyendo con soluciones robustas y eficientes. En
            esta presentación, destacaré mis habilidades, proyectos destacados y
            logros en el desarrollo backend.
          </p>
          <button className="text-blue-900 text-xl font-semibold bg-white rounded-full p-3 w-56  text-center  items-center hover:bg-gray-200 ">
            Descargar cv
          </button>
        </div>
        <img
          className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-2 border-white"
          height="400"
          src="/src/assets/avatar.png"
          width="400"
        />
      </div>
    </section>
  );
}
export default Presentacion;
