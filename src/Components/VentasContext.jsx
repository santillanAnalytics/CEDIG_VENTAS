import React, { createContext, useContext, useState, useMemo } from "react";

const VentasContext = createContext(null);

export const VentasProvider = ({ children }) => {

  // 🔹 Tarjetas (comisión)
  const [totalTarjetas, setTotalTarjetas] = useState(0);
  const [cantidadTDC, setCantidadTDC] = useState(0);

  // 🔹 Seguros (comisión)
  const [totalSeguros, setTotalSeguros] = useState(0);
  const [cantidadSeguros, setCantidadSeguros] = useState(0);

  // 🔹 Consumos
  const [totalConsumos, setTotalConsumos] = useState(0); // monto vendido
  const [comisionConsumos, setComisionConsumos] = useState(0); // comisión

  // 🔹 EFI
  const [totalEFI, setTotalEFI] = useState(0); // monto vendido
  const [comisionEFI, setComisionEFI] = useState(0); // comisión

  // 🔥 Aseguramos que siempre sean números
  const safeTotalTarjetas = Number(totalTarjetas) || 0;
  const safeTotalSeguros = Number(totalSeguros) || 0;
  const safeComisionConsumos = Number(comisionConsumos) || 0;
  const safeComisionEFI = Number(comisionEFI) || 0;

  const safeTotalConsumos = Number(totalConsumos) || 0;
  const safeTotalEFI = Number(totalEFI) || 0;

  // 🔥 Total Base (solo comisiones)
  const totalBase = useMemo(() => {
    return (
      safeTotalTarjetas +
      safeTotalSeguros +
      safeComisionConsumos +
      safeComisionEFI
    );
  }, [
    safeTotalTarjetas,
    safeTotalSeguros,
    safeComisionConsumos,
    safeComisionEFI,
  ]);

  return (
    <VentasContext.Provider
      value={{
        // Tarjetas
        totalTarjetas: safeTotalTarjetas,
        setTotalTarjetas,
        cantidadTDC,
        setCantidadTDC,

        // Seguros
        totalSeguros: safeTotalSeguros,
        setTotalSeguros,
        cantidadSeguros,
        setCantidadSeguros,

        // 🔹 Consumos (para puntos)
        totalConsumos: safeTotalConsumos,
        setTotalConsumos,

        // 🔹 EFI (para puntos)
        totalEFI: safeTotalEFI,
        setTotalEFI,

        // 🔹 Comisiones (para total base)
        comisionConsumos: safeComisionConsumos,
        setComisionConsumos,
        comisionEFI: safeComisionEFI,
        setComisionEFI,

        // 🔥 Total base ya correcto
        totalBase,
      }}
    >
      {children}
    </VentasContext.Provider>
  );
};

// 🔥 Hook seguro
export const useVentas = () => {
  const context = useContext(VentasContext);

  if (!context) {
    throw new Error("useVentas debe usarse dentro de VentasProvider");
  }

  return context;
};