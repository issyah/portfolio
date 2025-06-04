import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="rounded-lg p-2 laptop:p-4 first:ml-0 link work-card relative group"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden  shadow-2xl transition-all ease-out duration-300 h-48 mob:h-auto">
        <img
          alt={name}
          className="h-full w-full object-cover mx-auto object-top work-card-img transition-all duration-300 group-hover:blur-sm"
          src={img}
          style={{
            height: "240px",
          }}
        ></img>
        <h3 className="z-10 tlr mt-5 laptop:opacity-0 laptop:mt-0 laptop:flex laptop:justify-center laptop:items-center laptop:inset-0 laptop:opacity-1  text-2xl font-bold work-card-name laptop:absolute relative group-hover:opacity-100 transition-all ease-in-out duration-300">
          {name ? name : "Project Name"}
        </h3>
      </div>

      {/* <p className="opacity-50">{description ? description : "Description"}</p> */}
    </div>
  );
};

export default WorkCard;
