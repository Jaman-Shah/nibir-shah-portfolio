import React from "react";

const AvailableJobCard = ({ card }) => {
  const { title, description, imageUrl } = card;

  return (
    <div className="shadow-2xl p-4 group">
      <div
        className="bg-cover bg-center h-52 w-full transform transition-transform hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div>
        <h1 className="font-bold text-center my-2 border-b border-black pb-4 ">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AvailableJobCard;
