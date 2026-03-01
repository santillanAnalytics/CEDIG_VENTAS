import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
  <div>
        {/* DEFINIR EL COLOR DE LA BARRA DE NAVEGACION*/}
    <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-[#001391] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        {/* DEFINIR EL COLOR DE LA BARRA DE NAVEGACION*/}


      <div className="flex flex-col items-center cursor-pointer text-center">
        <Link to="tusganancias" spy={true} smooth={true} duration={500}>
          <h1 className="text-2xl font-semibold">CEDIG TRACKER</h1>
        </Link>
        <div className="w-64 h-[2px] bg-white my-2"></div>
        <p className="text-sm leading-tight">
        Hecho por lalo<br />
          
        </p>
      </div>
      <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">

                <Link
          to="tusganancias"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#1973E7] transition-all cursor-pointer"
        >
                      GANANCIAS
          </Link>


        <Link
          to="Seguros"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#1973E7] transition-all cursor-pointer"
        >
                      SEGUROS
          </Link>

        <Link
          to="consumos"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="flex flex-col items-center text-center hover:text-[#1973E7] transition-all cursor-pointer"
        >
          CONSUMOS
          <br />
          <span className="flex flex-col items-center text-center hover:text-[#1973E7] transition-all cursor-pointer">
            Y EFI
          </span>
        </Link>


          <Link
            to="tarjetas"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#1973E7] transition-all cursor-pointer"
          >
            TARJETAS
          </Link>


      

          <Link
            to="ganamas"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#1973E7] transition-all cursor-pointer"
          >
              GANA MAS
          </Link>

                  </nav>
     
          {showForm && <Contact closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >

          
          <Link
          to="tusganancias"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#1973E7] transition-all cursor-pointer"
        >
                      Ganancias
          </Link>

          <Link
            to="Seguros"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            SEGUROS
          </Link>

          <Link
            to="consumos"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            CONSUMOS
          </Link>

          <Link
            to="tarjetas"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            TARJETAS
          </Link>

          <Link
            to="ganamas"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >

                        GANA MAS
       
          </Link>


          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
