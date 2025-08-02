import React from "react";

const PromotionsPage = () => {
  return (
    <div className="min-h-screen bg-[#E0E0E0] pt-36 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#06257D] mb-10">SEGUROS</h1>

      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="table-auto w-full border-separate border-spacing-4">
          <thead>
            <tr className="text-white text-center font-semibold">
              <th className="bg-[#0050EF] rounded-xl px-4 py-3">SEGUROS</th>
              <th className="bg-[#1973E7] rounded-xl px-4 py-3">RANGO</th>
              <th className="bg-[#2F8DEB] rounded-xl px-4 py-3">PRIMA</th>
            </tr>
          </thead>
          <tbody className="text-center text-[#06257D] font-medium">
            {[
              { tipo: "Platino", cobertura: "más de 50", costo: "$120" },
              { tipo: "Oro", cobertura: "34 a 50", costo: "$100" },
              { tipo: "Azul", cobertura: "12 a 33", costo: "$100" },
              { tipo: "Rojo", cobertura: "1 a 11", costo: "$0" },
              { tipo: "Nuevo ingreso", cobertura: "1 a 11", costo: "$90" },
            ].map(({ tipo, cobertura, costo }, idx) => (
              <tr key={idx}>
                <td className="bg-white rounded-xl py-3">{tipo}</td>
                <td className="bg-white rounded-xl py-3">{cobertura}</td>
                <td className="bg-white rounded-xl py-3">{costo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotionsPage;
