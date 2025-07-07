import React from "react";
import { FaCertificate, FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import Button from "../Layouts/Button";
import ServicesCard from "../Layouts/ServicesCard";
import { HiUserGroup } from "react-icons/hi";

const Services = () => {
  const icon1 = (
    <FaCertificate size={35} className="text-backgroundColor" />
  );
  const icon2 = (
    <HiUserGroup size={35} className="text-backgroundColor" />
  );
  const icon3 = (
    <FaHeartbeat size={35} className="text-backgroundColor" />
  );

  // Aquí iría el resto del componente...


  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-center">
            Experiencia
          </h1>
          <p className=" mt-2 text-center lg:text-center">
            
          </p>
        </div>
      </div>
    <div className="flex flex-col lg:flex-row gap-5 pt-14">
      <ServicesCard
        icon={icon1}
        title="Certificado"
        description="Reconocido por el Consejo Mexicano de Ortopedia y Traumatología A.C., garantizando excelencia clínica."
      />
      <ServicesCard
        icon={icon2}
        title="Miembro activo"
        description="Asociación Mexicana de Cirugía Reconstructiva Articular y Artroscopía, A.C."
      />
      <ServicesCard
        icon={icon3}
        title="Cédulas"
        description={
          <>
            Profesional: 3119192<br />
            Especialidad: 4371245
          </>
        }
      />
    </div>
    </div>
  );
};

export default Services;