import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.color} font-bold py-2 px-4 rounded-lg inline-flex items-center`}
      onClick={props.href}
    >
      {props.text}
    </button>
  );
};

export default Button;
