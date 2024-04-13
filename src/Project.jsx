import { Card, CardHeader, CardBody,  Chip, Image } from "@nextui-org/react";
import { useState } from "react";
import { FaJava, FaReact  } from "react-icons/fa";
import {
  SiMysql
} from "react-icons/si";


function Project() {

  const [ishovered, setIshovered] = useState(false);

  return (
    <Card  className="static overflow-hidden transition duration-300 ease-in-out transform py-4 hover:scale-105 hover:shadow-2xl  "
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >

      <CardHeader className="static pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large max-w-60">Nombre de Proyecto</h4>
        <p className="text-tiny max-w-56 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut    
        </p>
        <div className="static flex gap-2 mt-3">
          <Chip  className="static text-blue-400"> <FaReact className="text-xl"/></Chip>
          <Chip className="static text-red-400"><FaJava className="text-xl"/></Chip>
          <Chip className="static text-blue-80000" > <SiMysql className="text-xl"/> </Chip>
        </div>  
      </CardHeader>
      <CardBody className="static overflow-visible py-2">
        <Image
          alt="Card background"
          className="static  rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>

      {ishovered && (
        
        <div className="absolute flex flex-row justify-center items-center  inset-0 bg-slate-900 bg-opacity-50 content-center">
          
          <button className=" bg-white  opacity-90 text-slate-600 font-bold px-4 py-2 rounded-lg ">
            Ver más
          </button>
        </div>
      ) }

    </Card>
  );
}

export default Project;
