import React from "react";

import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import Button from "../Layouts/Button";
import BlogCard from "../Layouts/BlogCard";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center  justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-center">
            Especialidades
          </h1>
          <p className="mt-2 text-center lg:text-right">
           
          </p>
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Dolor de rodilla" />
          <BlogCard img={img2} headlines="Dolor de hombro" />
          <BlogCard img={img3} headlines="Dolor de pie y tobillo"/>
          <BlogCard img={img4} headlines="Dolor de cadera" />
          <BlogCard img={img5} headlines="Dolor de codo" />
          <BlogCard img={img6} headlines="Dolor de muñeca" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;