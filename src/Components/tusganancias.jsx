import React, { useState, useMemo } from "react";
import { MdDelete } from "react-icons/md";

const ConsumosPage = () => {
  const [inputs, setInputs] = useState(Array(7).fill(""));

  const handleChange = (index, rawValue) => {
    const cleanValue = rawValue.replace(/\D/g, "");
    const newInputs = [...inputs];
    newInputs[index] = cleanValue;
    setInputs(newInputs);
  };

  const handleReset = () => {
  setInputs(Array(inputs.length).fill(""));
};

  const formatWithCommas = (value) => {
    if (!value) return "";
    return parseInt(value).toLocaleString("en-US");
  };

  // Calcula puntos según reglas anteriores
  const totalPoints = useMemo(() => {
    const segurosCount = Number(inputs[0]) || 0;
    const tarjetasCount =
      (Number(inputs[1]) || 0) + (Number(inputs[2]) || 0) + (Number(inputs[3]) || 0);
    const consumoTotal = (Number(inputs[5]) || 0) + (Number(inputs[6]) || 0);
    const efi = Number(inputs[4]) || 0;
    let points = 0;

    if (segurosCount >= 12) points += 1;
    if (tarjetasCount >= 1) points += 1;
    if (efi >= 20000) points += 1;
    if (consumoTotal >= 30000) points += 1;

    return points;
  }, [inputs]);

  // Calcula ganancias totales sumando todos (seguros + tarjetas + consumos + efi)
  const totalGanancias = useMemo(() => {
    const seguros = Number(inputs[0]) || 0;
    let tarifaSeguro = 0;
    if (seguros > 50) tarifaSeguro = 120;
    else if (seguros >= 34) tarifaSeguro = 110;
    else if (seguros >= 12) tarifaSeguro = 100;
    else if (seguros >= 1) tarifaSeguro = 0;

    const ganSeguros = seguros * tarifaSeguro;

    const primasTarjetas = [200, 250, 300];
    const ganTarjetas = [1, 2, 3].reduce((acc, i) => {
      const cant = Number(inputs[i]) || 0;
      const tarifa = primasTarjetas[i - 1];
      return acc + cant * tarifa;
    }, 0);

    const efi = Number(inputs[4]) || 0;

    const nomina = Number(inputs[5]) || 0;
    const ppi = Number(inputs[6]) || 0;
    const consumoTotal = nomina + ppi;

    let porcentajeNomina = 0;
    if (consumoTotal >= 700000) porcentajeNomina = 0.0055;
    else if (consumoTotal >= 500000) porcentajeNomina = 0.005;
    else if (consumoTotal >= 300000) porcentajeNomina = 0.0045;
    else if (consumoTotal >= 150000) porcentajeNomina = 0.004;
    else if (consumoTotal >= 10000) porcentajeNomina = 0.0035;

    let porcentajePPI = 0;
    if (consumoTotal >= 700000) porcentajePPI = 0.006;
    else if (consumoTotal >= 500000) porcentajePPI = 0.0055;
    else if (consumoTotal >= 300000) porcentajePPI = 0.005;
    else if (consumoTotal >= 150000) porcentajePPI = 0.0045;
    else if (consumoTotal >= 10000) porcentajePPI = 0.004;

    const ganNomina = nomina * porcentajeNomina;
    const ganPPI = ppi * porcentajePPI;

    let porcentajeEFI = 0;
    if (efi >= 100000) porcentajeEFI = 0.0032;
    else if (efi >= 10000) porcentajeEFI = 0.0027;

    const ganEFI = efi * porcentajeEFI;

    const total = ganSeguros + ganTarjetas + ganNomina + ganPPI + ganEFI;

    return total;
  }, [inputs]);



  

  // Calcula porcentaje según puntos
  const porcentaje = totalPoints >= 4 ? 1.4 : totalPoints === 3 ? 1.3 : 1;

  return (
    <div className="min-h-screen bg-[#E0E0E0] pt-36 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#06257D] mb-6">CALCULA TUS METAS</h1>

      <div className="overflow-x-auto w-full max-w-6xl mb-6">
        <table className="table-auto w-full border-separate border-spacing-4">
          <thead>
            <tr className="text-white text-center font-semibold">


<th className="bg-[#0050EF] rounded-xl px-14 py-6 text-xl" rowSpan={3}>
  <button
    onClick={handleReset}
    type="button"
    title="Limpiar"
    className="flex items-center justify-center w-8 h-8 rounded hover:bg-blue-700 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-24 w-24 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4v5h.582m0 0A7.5 7.5 0 0119.5 12a7.5 7.5 0 01-7.5 7.5c-1.372 0-2.66-.43-3.7-1.17M20 20l-4-4"
      />
    </svg>
  </button>
</th>



              
              <th className="bg-[#0050EF] rounded-xl px-6 py-4 text-xl" rowSpan={2}>
                Seguro
              </th>
              <th className="bg-[#1973E7] rounded-xl px-6 py-4 text-xl" colSpan={3}>
                Tarjetas
              </th>
              <th className="bg-[#2F8DEB] rounded-xl px-6 py-4 text-xl" colSpan={3}>
                Consumo
              </th>
            </tr>
            <tr className="text-white text-center font-semibold">
              <th className="bg-[#1973E7] rounded-xl px-6 py-4 text-xl">Azul</th>
              <th className="bg-[#1973E7] rounded-xl px-6 py-4 text-xl">Oro</th>
              <th className="bg-[#1973E7] rounded-xl px-6 py-4 text-xl">Platino</th>
              <th className="bg-[#2F8DEB] rounded-xl px-6 py-4 text-xl">EFI</th>
              <th className="bg-[#2F8DEB] rounded-xl px-6 py-4 text-xl">Nómina</th>
              <th className="bg-[#2F8DEB] rounded-xl px-6 py-4 text-xl">PPI</th>
            </tr>
          </thead>

          <tbody className="text-center text-[#06257D] font-medium">
            <tr>
              <td className="bg-white rounded-xl px-4 py-4 text-xl font-bold min-w-[120px]">Conteo</td>
              {inputs.map((value, index) => (
                <td
                  key={index}
                  className="rounded-xl py-3 min-w-[120px]"
                >
                  <div
                    className={`flex items-center justify-center rounded-xl w-full px-3 py-3 ${
                      value === "" ? "bg-yellow-200" : "bg-white"
                    }`}
                  >
                    {index >= 4 && value !== "" && (
                      <span className="text-[#06257D] font-bold mr-1">$</span>
                    )}
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={index >= 4 ? formatWithCommas(value) : value}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className={`w-full text-center text-[#06257D] font-bold text-xl outline-none rounded-xl ${
                        value === "" ? "bg-yellow-200" : "bg-white"
                      }`}
                      style={{ height: "3rem" }}
                    />
                  </div>
                </td>
              ))}
            </tr>




            {/* Ganancias */}
            <tr>
              <td className="bg-white rounded-xl px-4 py-4 text-xl font-bold min-w-[120px]">Ganancias</td>

              {/* SEGUROS */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[0]) > 0 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(() => {
                  const seguros = Number(inputs[0]) || 0;
                  let tarifa = 0;
                  if (seguros > 50) tarifa = 120;
                  else if (seguros >= 34) tarifa = 110;
                  else if (seguros >= 12) tarifa = 100;
                  else if (seguros >= 1) tarifa = 0;
                  const total = seguros * tarifa;
                  return total > 0 ? `$${total.toLocaleString()}` : "";
                })()}
              </td>




              {/* TARJETAS - Azul */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[1]) > 0 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(() => {
                  const cant = Number(inputs[1]) || 0;
                  const tarifa = 200;
                  const total = cant * tarifa;
                  return total > 0 ? `$${total.toLocaleString()}` : "";
                })()}
              </td>


              

              {/* TARJETAS - Oro */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[2]) > 0 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(() => {
                  const cant = Number(inputs[2]) || 0;
                  const tarifa = 250;
                  const total = cant * tarifa;
                  return total > 0 ? `$${total.toLocaleString()}` : "";
                })()}
              </td>

              {/* TARJETAS - Platino */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[3]) > 0 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(() => {
                  const cant = Number(inputs[3]) || 0;
                  const tarifa = 300;
                  const total = cant * tarifa;
                  return total > 0 ? `$${total.toLocaleString()}` : "";
                })()}
              </td>

              {/* EFI */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[4]) > 0 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(() => {
                  const efi = Number(inputs[4]) || 0;
                  if (efi >= 100000) return `$${Math.floor(efi * 0.0032).toLocaleString()}`;
                  if (efi >= 10000) return `$${Math.floor(efi * 0.0027).toLocaleString()}`;
                  return "";
                })()}
              </td>

              {/* Nómina */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[5]) > 0 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(() => {
                  const nomina = Number(inputs[5]) || 0;
                  const ppi = Number(inputs[6]) || 0;
                  const total = nomina + ppi;
                  let porcentaje = 0;
                  if (total >= 700000) porcentaje = 0.0055;
                  else if (total >= 500000) porcentaje = 0.005;
                  else if (total >= 300000) porcentaje = 0.0045;
                  else if (total >= 150000) porcentaje = 0.004;
                  else if (total >= 10000) porcentaje = 0.0035;
                  return nomina > 0 && porcentaje ? `$${Math.floor(nomina * porcentaje).toLocaleString()}` : "";
                })()}
              </td>

              {/* PPI */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[6]) > 0 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(() => {
                  const nomina = Number(inputs[5]) || 0;
                  const ppi = Number(inputs[6]) || 0;
                  const total = nomina + ppi;
                  let porcentaje = 0;
                  if (total >= 700000) porcentaje = 0.006;
                  else if (total >= 500000) porcentaje = 0.0055;
                  else if (total >= 300000) porcentaje = 0.005;
                  else if (total >= 150000) porcentaje = 0.0045;
                  else if (total >= 10000) porcentaje = 0.004;
                  return ppi > 0 && porcentaje ? `$${Math.floor(ppi * porcentaje).toLocaleString()}` : "";
                })()}
              </td>
            </tr>

            {/* Puntos */}
            <tr>
              <td className="bg-white rounded-xl px-4 py-4 text-xl font-bold min-w-[120px]">Puntos</td>

              {/* Seguros */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[0]) >= 12 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {Number(inputs[0]) >= 12 ? 1 : ""}
              </td>

              {/* TDC (fusionada: Azul + Oro + Platino) */}
              <td
                colSpan={3}
                className={`rounded-xl py-4 text-xl min-w-[120px] text-center ${
                  (Number(inputs[1]) + Number(inputs[2]) + Number(inputs[3])) >= 1 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(Number(inputs[1]) + Number(inputs[2]) + Number(inputs[3])) >= 1 ? 1 : ""}
              </td>

              {/* EFI */}
              <td
                className={`rounded-xl py-4 text-xl min-w-[120px] ${
                  Number(inputs[4]) >= 20000 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {Number(inputs[4]) >= 20000 ? 1 : ""}
              </td>

              {/* Consumo (fusionada: Nómina + PPI) */}
              <td
                colSpan={2}
                className={`rounded-xl py-4 text-xl min-w-[120px] text-center ${
                  (Number(inputs[5]) + Number(inputs[6])) >= 30000 ? "bg-white" : "bg-yellow-200"
                }`}
              >
                {(Number(inputs[5]) + Number(inputs[6])) >= 30000 ? 1 : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Segunda tabla */}
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="table-auto w-full border-separate border-spacing-4">
          <thead>
            <tr className="text-white text-center font-semibold">
              <th className="bg-[#0050EF] rounded-xl px-6 py-4 text-xl">Puntos</th>
              <th className="bg-[#1973E7] rounded-xl px-6 py-4 text-xl">Porcentaje</th>
              <th className="bg-[#2F8DEB] rounded-xl px-6 py-4 text-xl">Ganancias</th>
            </tr>
          </thead>
          <tbody className="text-center text-[#06257D] font-medium">
            <tr>
              <td
                className={`bg-white rounded-xl py-4 text-xl ${
                  totalPoints === 0 ? "bg-yellow-200" : ""
                }`}
                rowSpan={2}
              >
                {totalPoints === 0 ? "" : totalPoints}
              </td>
              <td
                className={`bg-white rounded-xl py-4 text-xl ${
                  totalPoints === 0 ? "bg-yellow-200" : ""
                }`}
                rowSpan={2}
              >
                {(porcentaje * 100).toFixed(0)}%
              </td>
              <td
                className={`bg-white rounded-xl py-4 text-xl ${
                  totalPoints === 0 ? "bg-yellow-200" : ""
                }`}
                rowSpan={2}
              >
                {totalGanancias > 0
            ? `$${Math.round(totalPoints <= 2 ? totalGanancias : totalGanancias * porcentaje).toLocaleString()}`
            : "$0"}
              </td>
            </tr>
          </tbody>
        </table>

        
      </div>

      
    </div>
  );
};

export default ConsumosPage;
