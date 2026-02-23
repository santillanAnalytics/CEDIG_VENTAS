import React, { useState } from "react";

const BBVATablaProductos = () => {
  const [nomina, setNomina] = useState("");
  const [ppi, setPpi] = useState("");
  const [efi, setEfi] = useState("");

  const parseMoney = (value) => value.replace(/[^0-9]/g, "");

  const formatMoney = (value) => {
    if (value === "") return "";
    return Number(value).toLocaleString("es-MX");
  };

  const totalConsumo = (Number(nomina) || 0) + (Number(ppi) || 0);

  const obtenerPorcentajes = () => {
    if (totalConsumo >= 700000) return { nomina: 0.0055, ppi: 0.006 };
    if (totalConsumo >= 500000) return { nomina: 0.005, ppi: 0.0055 };
    if (totalConsumo >= 300000) return { nomina: 0.0045, ppi: 0.005 };
    if (totalConsumo >= 150000) return { nomina: 0.004, ppi: 0.0045 };
    if (totalConsumo >= 10000) return { nomina: 0.0035, ppi: 0.004 };
    return { nomina: 0, ppi: 0 };
  };

  const obtenerPorcentajeEFI = () => {
    const valor = Number(efi) || 0;
    if (valor >= 100000) return 0.0032;
    if (valor >= 10000) return 0.0027;
    return 0;
  };

  const porcentajes = obtenerPorcentajes();
  const porcentajeEFI = obtenerPorcentajeEFI();

  const ganNomina = (Number(nomina) || 0) * porcentajes.nomina;
  const ganPpi = (Number(ppi) || 0) * porcentajes.ppi;
  const ganEFI = (Number(efi) || 0) * porcentajeEFI;

  const totalGanancia = ganNomina + ganPpi + ganEFI;

  const rangosConsumo = [
    { nivel: "Elite", activo: totalConsumo >= 700000 },
    { nivel: "Platinum", activo: totalConsumo >= 500000 && totalConsumo < 700000 },
    { nivel: "Oro", activo: totalConsumo >= 300000 && totalConsumo < 500000 },
    { nivel: "Azul", activo: totalConsumo >= 150000 && totalConsumo < 300000 },
    { nivel: "Rojo", activo: totalConsumo >= 10000 && totalConsumo < 150000 },
  ];

  const rangoEFI = [
    { rango: "≥ $100,000", activo: Number(efi) >= 100000 },
    { rango: "$10,000 - $99,999", activo: Number(efi) >= 10000 && Number(efi) < 100000 },
  ];

  return (
    <div className="min-h-screen bg-[#E0E0E0] px-10 pt-20 pb-10 flex flex-col items-center space-y-12">

      <h1 className="text-4xl font-bold text-[#06257D] text-center">CONSUMOS</h1>

      {/* INPUTS */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">

        {/* NOMINA */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="text"
            value={formatMoney(nomina)}
            onChange={(e) => setNomina(parseMoney(e.target.value))}
            placeholder="Nómina"
            className="w-full pl-7 pr-3 py-3 rounded-lg border text-center text-xl"
            inputMode="numeric"
          />
        </div>

        {/* PPI */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="text"
            value={formatMoney(ppi)}
            onChange={(e) => setPpi(parseMoney(e.target.value))}
            placeholder="PPI"
            className="w-full pl-7 pr-3 py-3 rounded-lg border text-center text-xl"
            inputMode="numeric"
          />
        </div>

        {/* EFI */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="text"
            value={formatMoney(efi)}
            onChange={(e) => setEfi(parseMoney(e.target.value))}
            placeholder="EFI"
            className="w-full pl-7 pr-3 py-3 rounded-lg border text-center text-xl"
            inputMode="numeric"
          />
        </div>
      </div>

      {/* TABLA CONSUMO */}
      <div className="w-full max-w-5xl">
        <table className="table-auto w-full border-separate border-spacing-4 text-center">
          <thead>
            <tr className="text-white font-semibold">
              <th className="bg-[#0050EF] rounded-xl py-3">Nivel</th>
              <th className="bg-[#1973E7] rounded-xl py-3">Nómina %</th>
              <th className="bg-[#2F8DEB] rounded-xl py-3">PPI %</th>
            </tr>
          </thead>
          <tbody className="font-medium text-[#06257D]">
            {[
              ["Elite", "0.55%", "0.60%"],
              ["Platinum", "0.50%", "0.55%"],
              ["Oro", "0.45%", "0.50%"],
              ["Azul", "0.40%", "0.45%"],
              ["Rojo", "0.35%", "0.40%"],
            ].map((row, i) => (
              <tr key={i} className={rangosConsumo[i].activo ? "scale-105" : ""}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`rounded-xl py-3 ${
                      rangosConsumo[i].activo
                        ? "bg-green-200 font-bold"
                        : "bg-[#E3F2FD]"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TABLA EFI */}
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#06257D] text-center mb-2">EFI</h2>
        <table className="table-auto w-full border-separate border-spacing-4 text-center">
          <thead>
            <tr className="text-white font-semibold">
              <th className="bg-[#0050EF] rounded-xl py-3">Rango</th>
              <th className="bg-[#1973E7] rounded-xl py-3">%</th>
            </tr>
          </thead>
          <tbody className="font-medium text-[#06257D]">
            {[["≥ $100,000", "0.32%"], ["$10,000 - $99,999", "0.27%"]].map(
              (row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`rounded-xl py-3 ${
                        rangoEFI[i].activo
                          ? "bg-green-200 font-bold"
                          : "bg-[#E3F2FD]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* RESULTADO */}
      <div className="bg-white px-10 py-6 rounded-2xl shadow-lg text-center">
        <p className="text-gray-500">Ganancia estimada</p>
        <p className="text-4xl font-bold text-[#06257D]">
          {totalGanancia > 0
            ? `$${Math.floor(totalGanancia).toLocaleString()}`
            : "$0"}
        </p>
      </div>
    </div>
  );
};

export default BBVATablaProductos;