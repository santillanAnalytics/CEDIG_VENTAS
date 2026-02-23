import React, { useState } from "react";
import BlogCard from "../Layouts/BlogCard";

import img1 from "../assets/img/azul_tdc.jpg";
import img2 from "../assets/img/oro_tdc.jpg";
import img3 from "../assets/img/platino_tdc.jpg";

const TarjetasPage = () => {
  const [azul, setAzul] = useState("");
  const [oro, setOro] = useState("");
  const [platino, setPlatino] = useState("");

  const parseNumber = (v) => v.replace(/\D/g, "");

  // Convertimos a número
  const azulNum = Number(azul) || 0;
  const oroNum = Number(oro) || 0;
  const platinoNum = Number(platino) || 0;

  // Ganancias SOLO por tipo
  const ganAzul = azulNum * 200;
  const ganOro = oroNum * 250;
  const ganPlatino = platinoNum * 300;

  // Total tarjetas
  const totalTarjetas = azulNum + oroNum + platinoNum;

  // Subtotal sin bono
  const subtotal = ganAzul + ganOro + ganPlatino;

  // Bono: $100 por tarjeta SOLO si se vende más de una
  const bono = totalTarjetas > 1 ? totalTarjetas * 100 : 0;

  // Total final
  const total = subtotal + bono;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 px-6">

      <h1 className="text-4xl font-bold text-[#06257D] text-center mb-10">
        Tarjetas de crédito
      </h1>

      <div className="flex flex-wrap justify-center gap-5 mb-10">
        <BlogCard img={img1} headlines="Azul $200" />
        <BlogCard img={img2} headlines="Oro $250" />
        <BlogCard img={img3} headlines="Platino $300" />
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
        <input
          type="text"
          value={azul}
          onChange={(e) => setAzul(parseNumber(e.target.value))}
          placeholder="Cantidad Azul"
          className="border rounded-lg py-3 text-center text-xl"
          inputMode="numeric"
        />

        <input
          type="text"
          value={oro}
          onChange={(e) => setOro(parseNumber(e.target.value))}
          placeholder="Cantidad Oro"
          className="border rounded-lg py-3 text-center text-xl"
          inputMode="numeric"
        />

        <input
          type="text"
          value={platino}
          onChange={(e) => setPlatino(parseNumber(e.target.value))}
          placeholder="Cantidad Platino"
          className="border rounded-lg py-3 text-center text-xl"
          inputMode="numeric"
        />
      </div>

      {/* Tabla */}
      <div className="w-full max-w-3xl">
        <table className="table-auto w-full border-separate border-spacing-4 text-center">
          <thead>
            <tr className="text-white font-semibold">
              <th className="bg-[#0050EF] rounded-xl py-3">Tipo</th>
              <th className="bg-[#1973E7] rounded-xl py-3">Cantidad</th>
              <th className="bg-[#2F8DEB] rounded-xl py-3">Ganancia</th>
            </tr>
          </thead>
          <tbody className="text-[#06257D] font-medium">
            <tr>
              <td className="bg-[#E3F2FD] rounded-xl py-3">Azul</td>
              <td className="bg-[#E3F2FD] rounded-xl py-3">{azulNum}</td>
              <td className="bg-[#E3F2FD] rounded-xl py-3 font-bold">
                ${ganAzul.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="bg-[#E3F2FD] rounded-xl py-3">Oro</td>
              <td className="bg-[#E3F2FD] rounded-xl py-3">{oroNum}</td>
              <td className="bg-[#E3F2FD] rounded-xl py-3 font-bold">
                ${ganOro.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="bg-[#E3F2FD] rounded-xl py-3">Platino</td>
              <td className="bg-[#E3F2FD] rounded-xl py-3">{platinoNum}</td>
              <td className="bg-[#E3F2FD] rounded-xl py-3 font-bold">
                ${ganPlatino.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="bg-[#06257D] text-white px-10 py-6 rounded-2xl mt-10 text-center shadow-lg">
        <p className="text-lg">Total tarjetas vendidas: {totalTarjetas}</p>

        {bono > 0 && (
          <p className="text-md opacity-90">
            Bono aplicado: ${bono.toLocaleString()}
          </p>
        )}

        <p className="text-4xl font-bold mt-2">
          ${total.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default TarjetasPage;