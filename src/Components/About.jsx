import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">Una atención de primera</h1>
        <p className=" text-justify lg:text-start">
          Experiencia y compromiso
          
        </p>
        <p className="text-justify lg:text-start">
          Con más de 21 años de experiencia en Ortopedia y Traumatología. Especializado en cirugía articular protésica y 
          artroscopia multiarticular, utilizo técnicas avanzadas para tratar problemas de rodilla, cadera, hombro, pie y tobillo.
        </p>
        <p className="text-justify lg:text-start">
          Mi enfoque personalizado y el uso de tecnología de vanguardia 
          garantizan un tratamiento integral y de alta calidad, mejorando la calidad de vida de mis pacientes.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;