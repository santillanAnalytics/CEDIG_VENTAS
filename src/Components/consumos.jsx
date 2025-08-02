import React from "react";

const BBVATablaProductos = () => {
  return (
    <div className="min-h-screen bg-[#E0E0E0] px-10 pt-20 pb-10 flex flex-col items-center space-y-12">
      
      {/* Tabla Consumo */}
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-[#06257D] mb-4 text-center">CONSUMOS</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-separate border-spacing-4">
            <thead>
              <tr className="text-white text-center font-semibold">
                <th className="bg-[#0050EF] rounded-xl px-4 py-3">Producto</th>
                <th className="bg-[#1973E7] rounded-xl px-4 py-3">Rango</th>
                <th className="bg-[#2F8DEB] rounded-xl px-4 py-3">Nómina</th>
                <th className="bg-[#63A7F4] rounded-xl px-4 py-3">PPI</th>
              </tr>
            </thead>
            <tbody className="text-center text-[#06257D] font-medium">
              {[
                ["Elite", ">= $700,000", "0.55%", "0.60%"],
                ["Platinum", "$500,000 - $699,999", "0.50%", "0.55%"],
                ["Oro", "$300,000 - $499,999", "0.45%", "0.50%"],
                ["Azul", "$150,000 - $299,999", "0.40%", "0.45%"],
                ["Rojo", "$10,000 - $149,000", "0.35%", "0.40%"],
                ["Nuevo ingreso", "$10,000 - $149,000", "0.35%", "0.40%"],
              ].map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i} className="bg-[#E3F2FD] rounded-xl py-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabla EFI con título a un lado */}
      <div className="w-full max-w-4xl flex items-center gap-8">
        <h1 className="text-4xl font-bold text-[#06257D] whitespace-nowrap">EFI</h1>
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full border-separate border-spacing-4">
            <thead>
              <tr className="text-white text-center font-semibold">
                <th className="bg-[#0050EF] rounded-xl px-4 py-3">Rango Nómina</th>
                <th className="bg-[#1973E7] rounded-xl px-4 py-3">PPI</th>
              </tr>
            </thead>
            <tbody className="text-center text-[#06257D] font-medium">
              <tr>
                <td className="bg-[#E3F2FD] rounded-xl py-3">&ge; $100,000</td>
                <td className="bg-[#E3F2FD] rounded-xl py-3">0.32%</td>
              </tr>
              <tr>
                <td className="bg-[#E3F2FD] rounded-xl py-3">$10,000 - $99,000</td>
                <td className="bg-[#E3F2FD] rounded-xl py-3">0.27%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default BBVATablaProductos;
