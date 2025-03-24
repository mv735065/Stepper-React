import React from "react";

const Circle = ({ title, color = "white", presentStep }) => {
  const colorClasses = {
    red: "bg-red-500",

    green: "bg-green-500",
    white: "bg-white",
  };

  color = presentStep == title || title === 1 ? "red" : "white";
  color = presentStep > title ? "green" : color;

  return (
    <div
      className={`rounded-full border border-gray-300 flex justify-center items-center py-2 px-4 ${colorClasses[color]}`}
    >
      <p>{title}</p>
    </div>
  );
};

export default Circle;
