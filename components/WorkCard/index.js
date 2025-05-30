import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="rounded-lg p-2 laptop:p-4 first:ml-0 link work-card relative"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto">
        <img
          alt={name}
          className="h-full w-full object-cover mx-auto  object-top work-card-img"
          src={img}
        ></img>
      </div>
      <h3 className="mt-5 text-3xl font-bold work-card-name">
        {name ? name : "Project Name"}
      </h3>
      {/* <p className="opacity-50">{description ? description : "Description"}</p> */}
    </div>
  );
};

export default WorkCard;
