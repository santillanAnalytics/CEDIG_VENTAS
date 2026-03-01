import React, { useMemo } from "react";
import { useVentas } from "./VentasContext";

const GanaMas = () => {

  const {
    totalTarjetas = 0,
    totalSeguros = 0,
    totalConsumos = 0,
    totalEFI = 0,
    cantidadTDC = 0,
    cantidadSeguros = 0,
    totalBase = 0
  } = useVentas();

  // 🔥 Formateador de moneda seguro
  const formatMoney = (value) =>
    Number(value || 0).toLocaleString("es-MX");

  // 🔥 Cálculo de puntos
const puntos = useMemo(() => {
  const consumos = Number(totalConsumos) || 0;
  const tdc = Number(cantidadTDC) || 0;
  const efi = Number(totalEFI) || 0;
  const seguros = Number(cantidadSeguros) || 0;

  let p = 0;

  if (consumos >= 30000) p++;
  if (tdc >= 1) p++;
  if (efi >= 20000) p++;
  if (seguros >= 12) p++;

  return p;
}, [totalConsumos, cantidadTDC, totalEFI, cantidadSeguros]);




  // 🔥 Porcentaje según puntos
  const porcentaje = useMemo(() => {
    if (puntos >= 4) return 0.40;
    if (puntos === 3) return 0.30;
    return 0;
  }, [puntos]);

  // 🔥 Bono y total final optimizados
  const bono = useMemo(() => totalBase * porcentaje, [totalBase, porcentaje]);
  const totalFinal = useMemo(() => totalBase + bono, [totalBase, bono]);

  return (
    <div className="min-h-screen bg-[#E0E0E0] pt-36 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#06257D] mb-6">
        GANA MÁS
      </h1>

      {/* PANEL PRINCIPAL */}
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-2xl mb-10">

        <p className="text-xl font-semibold text-[#06257D]">
          Puntos obtenidos: {puntos}
        </p>

       {/* <p className="text-lg mt-2">
          Porcentaje aplicado: {porcentaje * 100}%
        </p>  */}

        <p className="text-lg mt-4">
          Total base acumulado:
          <span className="font-bold">
            {" "} ${formatMoney(totalBase)}
          </span>
        </p>


        <p className="text-lg text-[#2165ca] font-semibold">
          Bono Gana Más:
          {" "} ${formatMoney(bono)}
        </p>

        <p className="text-3xl font-bold mt-4 text-[#06257D]">
          Total Final:
          {" "} ${formatMoney(totalFinal)}
        </p>

      </div>

      {/* TABLA 1 */}
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

      {/* TABLA 2 */}
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

export default GanaMas;