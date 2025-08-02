import React from "react";

const ConsumosPage = () => {
  return (
    <div className="min-h-screen bg-[#E0E0E0] pt-36 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#06257D] mb-6">GANA MÁS</h1>

      {/* Primera tabla */}
      <div className="overflow-x-auto w-full max-w-4xl mb-6">
        <table className="table-auto w-full border-separate border-spacing-4">
          <thead>
            <tr className="text-white text-center font-semibold">
              <th className="bg-[#0050EF] rounded-xl px-4 py-3">Apps</th>
              <th className="bg-[#1973E7] rounded-xl px-4 py-3">Consumo</th>
              <th className="bg-[#2F8DEB] rounded-xl px-4 py-3">TDC</th>
              <th className="bg-[#1973E7] rounded-xl px-4 py-3">EFI</th>
              <th className="bg-[#0050EF] rounded-xl px-4 py-3">Seguros</th>
            </tr>
          </thead>
          <tbody className="text-center text-[#06257D] font-medium">
            <tr>
              <td className="bg-white rounded-xl py-3">Mínimo</td>
              <td className="bg-white rounded-xl py-3">$30,000</td>
              <td className="bg-white rounded-xl py-3">1</td>
              <td className="bg-white rounded-xl py-3">$20,000</td>
              <td className="bg-white rounded-xl py-3">12</td>
            </tr>
            <tr>
              <td className="bg-white rounded-xl py-3">Puntos</td>
              <td className="bg-white rounded-xl py-3">1</td>
              <td className="bg-white rounded-xl py-3">1</td>
              <td className="bg-white rounded-xl py-3">1</td>
              <td className="bg-white rounded-xl py-3">1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Segunda tabla */}
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="table-auto w-full border-separate border-spacing-4">
          <thead>
            <tr className="text-white text-center font-semibold">
              <th className="bg-[#0050EF] rounded-xl px-4 py-3">Puntos</th>
              <th className="bg-[#1973E7] rounded-xl px-4 py-3">Porcentaje</th>
              <th className="bg-[#2F8DEB] rounded-xl px-4 py-3">Observaciones</th>
            </tr>
          </thead>
          <tbody className="text-center text-[#06257D] font-medium">
            <tr>
              <td className="bg-white rounded-xl py-3">2 puntos</td>
              <td className="bg-white rounded-xl py-3">0%</td>
              <td className="bg-white rounded-xl py-3" rowSpan={3}>
                Sobre Total de Gana Más
                </td>
              
            </tr>
            <tr>
              <td className="bg-white rounded-xl py-3">3 puntos</td>
              <td className="bg-white rounded-xl py-3">30%</td>
              

            </tr>
            <tr>
              <td className="bg-white rounded-xl py-3">4 puntos</td>
              <td className="bg-white rounded-xl py-3">40%</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsumosPage;
