import React from "react";
import { useId } from "react";

const Input = React.forwardRef(function Input(
  { type = "text", label, classname = "", placeholder = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50
            duration-200 border border-gray-200 w-full ${classname}`}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
