import { Card, CardHeader, CardBody,  Chip, Image } from "@nextui-org/react";
import { useState } from "react";
import { FaJava, FaReact  } from "react-icons/fa";
import  avatar  from "../static/nomina.png";
import { SiMysql } from "react-icons/si";


function Project() {

  const [ishovered, setIshovered] = useState(false);



  return (
    
    <Card  className="  overflow-hidden transition duration-300 ease-in-out
     transform py-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600
      bg-gray-900 p-4 rounded-2xl shadow-2xl shadow-black "
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >
      

      <CardHeader className="  pb-0 pt-2 px-4 flex-col items-start ">
        <h3 className="font-bold text-2xl max-w-60 text-blue-50">Nombre de Proyecto</h3>
        <p className="text-tiny max-w-56 text-violet-700 mt-3 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut    
        </p>
        <div className=" container grid gap-4 mt-5 grid-cols-4  ">
          <Chip  className="bg-slate-800 text-blue-400"> <FaReact className="text-xl"/></Chip>
          <Chip className=" bg-slate-800 text-red-400"><FaJava className="text-xl"/></Chip>
          <Chip className=" bg-slate-800 text-white" > <SiMysql className="text-xl"/> </Chip>
          
        </div>  
      </CardHeader>
      <CardBody className=" overflow-visible py-2 mt-5">
        <Image
          alt="Card background"
          className="static  rounded-xl"

              //https://nextui.org/images/hero-card-complete.
          src={avatar}
          width={270}
        />
      </CardBody>

      {ishovered && (
        
        <div className="fixed flex flex-row justify-center items-center   inset-0 bg-slate-800 bg-opacity-40 z-10">
          <div className="absolute inset-0 bg-slate-900 backdrop-filter backdrop-blur-2xl  opacity-60"></div>
      
          <a href="/projects" className=" bg-purple-950  opacity-90 text-white font-bold px-4 py-2 rounded-lg ">
            Ver más
          </a>
        </div>
      ) }

    </Card>

  );
}

export default Project;
