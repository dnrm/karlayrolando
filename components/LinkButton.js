import React from "react";

const LinkButton = (props) => {
  return (
    <a {...props} className="bg-primary rounded-xl text-white font-typewriter px-8 py-3 cursor-pointer">
      {props.children}
    </a>
  );
};

export default LinkButton;
