import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto shadow-xl">
        <img
          alt={name}
          style={{
            height: "300px",
          }}
          className="h-full w-full object-cover  hover:scale-110 transition-all ease-out duration-300 object-top"
          src={img}
        ></img>
      </div>
      <h3 className="mt-5 text-3xl font-bold">
        {name ? name : "Project Name"}
      </h3>
      <p className="opacity-50">{description ? description : "Description"}</p>
    </div>
  );
};

export default WorkCard;
