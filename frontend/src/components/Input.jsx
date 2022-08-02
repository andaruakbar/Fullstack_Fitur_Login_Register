import React from "react";

function Input({
  type,
  id,
  multiple,
  required,
  placeholder,
  value,
  onChange,
  disabled,
  radius,
}) {
  const mystyle = {
    borderRadius: radius,
  };

  return (
    <input
      className="w-full bg-white placeholder-stone-600 text-neutral-900 font-normal border border-blue-400 focus:border focus:border-blue-400 focus:ring-0 rounded-sm p-2 pl-3 pt-2 text-sm file:bg-blue-600 file:text-white file:rounded-[4px] file:py-1 file:px-4 file:font-semibold file:text-sm file:float-right file:border-0 file:cursor-pointer"
      id={id}
      type={type}
      multiple={multiple}
      onChange={onChange}
      disabled={disabled}
      required={required}
      defaultValue={value}
      placeholder={placeholder}
      style={mystyle}
    />
  );
}

export { Input };
