import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0" style={{ backgroundColor: "#62635C" }}>
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
   

    <div className="w-full md:w-1/4 text-center">
  <h1 className="font-semibold text-3xl pb-2">VENTAS CEGIG</h1>
  <hr className="border-t-2 border-gray-300 w-64 mx-auto mb-2" />
  <p className="text-lg">
    GANA MÁS<br />


    
  </p>

    </div>





  








      </div>
      <div>
        <p className=" text-center py-4">
          Sitio desarrollado Edu<br />
          
          <span className=" text-hoverColor"> </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;