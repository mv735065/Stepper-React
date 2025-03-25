import React from "react";

const Button = ({ title, handleClick, disabled }) => {
  return (
    <button
      className={`py-2 px-8 border bg-white rounded-2xl mt-8 ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
