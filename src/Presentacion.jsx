import avatar from "/avatar.png";

function Presentacion() {
  return (
    <section className="w-full py-28 md:py-28 lg:py-48 flex justify-center ">
      <div className="container flex flex-col gap-10 px- text-center md:px- lg:flex-row md:items-center ">
        <div className="mx-auto max-w-[700px] md:text-left space-y-8">
          <h1 className="text-4xl tracking-tighter sm:text-5xl md:text-7xl text-transparent bg-clip-text font-bold tex bg-gradient-to-r from-blue-200 to-blue-800/50 ">
              Edwin Dávila
          </h1>
          <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hola, soy desarrollador Backend con experiencia en el desarrollo de aplicaciones web y de escritorio. Me apasiona la tecnología y la programación.
          </p>
          <button className="text-blue-900 text-xl font-semibold bg-white rounded-full p-3 w-56  text-center  items-center hover:bg-gray-200 ">
            Descargar cv
          </button>
        </div>
        <img
          className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-2 border-white"
          height="400"
          src= {avatar}
          width="400"
        />
      </div>
    </section>
  );
}
export default Presentacion;
