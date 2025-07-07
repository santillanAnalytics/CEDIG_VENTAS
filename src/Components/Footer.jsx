import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0" style={{ backgroundColor: "#62635C" }}>
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
   

        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Dr. Arturo Reyes</h1>
          <p className=" text-sm">
            Traumatología y Ortopedia
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Opciones</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Quien soy 
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Experiencia
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Mi carrera profesional
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0"> </h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contacto</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Citas: (477) 713 28 91
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              Tel: (477) 143 30 39
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
             

            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          Sitio desarrollado Edu<br />
          Aviso de Privacidad
          <span className=" text-hoverColor"> </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;