import React, { useState } from "react";

const PromotionsPage = () => {
  const [cantidad, setCantidad] = useState("");

  const seguros = Number(cantidad) || 0;

  const obtenerTarifa = () => {
    if (seguros > 50) return 120;
    if (seguros >= 34) return 110;
    if (seguros >= 12) return 100;
    if (seguros >= 1) return 0;
    return 0;
  };

  const total = seguros * obtenerTarifa();

  const rangos = [
    { tipo: "Platino", rango: "más de 50", prima: 120, activo: seguros > 50 },
    { tipo: "Oro", rango: "34 a 50", prima: 110, activo: seguros >= 34 && seguros <= 50 },
    { tipo: "Azul", rango: "12 a 33", prima: 100, activo: seguros >= 12 && seguros <= 33 },
    { tipo: "Rojo", rango: "1 a 11", prima: 0, activo: seguros >= 1 && seguros <= 11 },
  ];

  return (
    <div className="min-h-screen bg-[#E0E0E0] pt-36 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#06257D] mb-10">SEGUROS</h1>

      {/* INPUT */}
      <div className="mb-8 text-center">
        <p className="text-lg font-semibold text-[#06257D] mb-2">
          Ingresa seguros vendidos
        </p>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          placeholder="Ej: 25"
          className="px-4 py-2 rounded-lg text-center text-xl border-2 border-[#1973E7] focus:outline-none focus:ring-2 focus:ring-[#1973E7]"
        />
      </div>

      {/* TABLA */}
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
            {rangos.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-all duration-300 ${
                  row.activo ? "scale-105" : ""
                }`}
              >
                <td
                  className={`rounded-xl py-3 ${
                    row.activo ? "bg-green-200 font-bold" : "bg-white"
                  }`}
                >
                  {row.tipo}
                </td>
                <td
                  className={`rounded-xl py-3 ${
                    row.activo ? "bg-green-200 font-bold" : "bg-white"
                  }`}
                >
                  {row.rango}
                </td>
                <td
                  className={`rounded-xl py-3 ${
                    row.activo ? "bg-green-200 font-bold" : "bg-white"
                  }`}
                >
                  ${row.prima}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RESULTADO */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg px-10 py-6 text-center">
        <p className="text-lg text-gray-500">Ganancia estimada</p>
        <p className="text-4xl font-bold text-[#06257D]">
          {total > 0 ? `$${total.toLocaleString()}` : "$0"}
        </p>
      </div>
    </div>
  );
};

export default PromotionsPage;