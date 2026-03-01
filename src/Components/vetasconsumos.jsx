import React, { useState, useEffect } from "react";
import { useVentas } from "./VentasContext";

const BBVATablaProductos = () => {

  const { 
    setTotalConsumos, 
    setTotalEFI,
    setComisionConsumos,
    setComisionEFI
  } = useVentas();

  const [nomina, setNomina] = useState("");
  const [ppi, setPpi] = useState("");
  const [efi, setEfi] = useState("");

  const parseMoney = (value) => value.replace(/[^0-9]/g, "");

  const formatMoney = (value) => {
    if (value === "") return "";
    return Number(value).toLocaleString("es-MX");
  };

  const totalConsumo = (Number(nomina) || 0) + (Number(ppi) || 0);

  // 🔵 Niveles dinámicos
  const niveles = [
    { nombre: "Elite", min: 700000, nomina: 0.0055, ppi: 0.006 },
    { nombre: "Platinum", min: 500000, nomina: 0.005, ppi: 0.0055 },
    { nombre: "Oro", min: 300000, nomina: 0.0045, ppi: 0.005 },
    { nombre: "Azul", min: 150000, nomina: 0.004, ppi: 0.0045 },
    { nombre: "Rojo", min: 10000, nomina: 0.0035, ppi: 0.004 },
  ];

  const nivelActual =
    niveles.find((nivel) => totalConsumo >= nivel.min) || null;

  const porcentajeNomina = nivelActual ? nivelActual.nomina : 0;
  const porcentajePpi = nivelActual ? nivelActual.ppi : 0;

  // 🔵 EFI
  const obtenerPorcentajeEFI = () => {
    const valor = Number(efi) || 0;
    if (valor >= 100000) return 0.0032;
    if (valor >= 10000) return 0.0027;
    return 0;
  };

  const porcentajeEFI = obtenerPorcentajeEFI();

  // 🔵 Ganancias
  const ganNomina = (Number(nomina) || 0) * porcentajeNomina;
  const ganPpi = (Number(ppi) || 0) * porcentajePpi;
  const ganConsumo = ganNomina + ganPpi;
  const ganEFI = (Number(efi) || 0) * porcentajeEFI;
  const totalGanancia = ganConsumo + ganEFI;

  // 🔥 ENVIAMOS DATOS AL CONTEXT AUTOMÁTICAMENTE
  useEffect(() => {

    // 🔹 Montos reales (para puntos si los usas)
    setTotalConsumos(totalConsumo);
    setTotalEFI(Number(efi) || 0);

    // 🔹 SOLO COMISIONES para Gana Más
    setComisionConsumos(Math.floor(ganConsumo));
    setComisionEFI(Math.floor(ganEFI));

  }, [
    totalConsumo,
    efi,
    ganConsumo,
    ganEFI,
    setTotalConsumos,
    setTotalEFI,
    setComisionConsumos,
    setComisionEFI
  ]);

  return (
    <div className="min-h-screen bg-[#E0E0E0] px-10 pt-20 pb-10 flex flex-col items-center space-y-12">

      <h1 className="text-4xl font-bold text-[#06257D] text-center">
        CONSUMOS
      </h1>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">

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

      <div className="bg-white px-10 py-6 rounded-2xl shadow-lg text-center">
        <p className="text-gray-500">Ganancia Total</p>
        <p className="text-4xl font-bold text-[#06257D]">
          {`$${Math.floor(totalGanancia).toLocaleString()}`}
        </p>
      </div>

      <div className="bg-white px-10 py-6 rounded-2xl shadow-lg text-center">
        <p className="text-gray-500">Ganancia Consumo</p>
        <p className="text-4xl font-bold text-[#06257D]">
          {`$${Math.floor(ganConsumo).toLocaleString()}`}
        </p>
      </div>

      <div className="bg-white px-10 py-6 rounded-2xl shadow-lg text-center">
        <p className="text-gray-500">Ganancia EFI</p>
        <p className="text-4xl font-bold text-[#06257D]">
          {`$${Math.floor(ganEFI).toLocaleString()}`}
        </p>
      </div>

    </div>
  );
};

export default BBVATablaProductos;