import React from "react";

const BlogCard = ({ img, headlines }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img
        className="h-40 w-full object-cover rounded-lg"
        src={img}
        alt="img"
      />
      <h2 className="text-lg text-center font-semibold">{headlines}</h2>
      <p className="text-center text-sm"></p>
    </div>
  );
};

export default BlogCard;
