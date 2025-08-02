import React from "react";
import BlogCard from "../Layouts/BlogCard";

import img1 from "../assets/img/azul_tdc.jpg";
import img2 from "../assets/img/oro_tdc.jpg";
import img3 from "../assets/img/platino_tdc.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center lg:px-24 px-5 pt-24">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-4xl font-bold text-[#06257D] text-center">
          Tarjetas de crédito
        </h1>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Azul y otras $200" />
          <BlogCard img={img2} headlines="Oro y UNAM $250" />
          <BlogCard img={img3} headlines="Platino $300" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
