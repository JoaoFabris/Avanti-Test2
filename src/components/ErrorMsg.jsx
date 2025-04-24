import React from "react";

export const ErrorMsg = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`
      bg-[#D9D9D9] rounded-3xl px-6 py-4 min-h-[10rem] min-w-[60rem] w-full max-w-[90%] flex items-center space-x-6 justify-center
      text-[#E63946] text-center text-base leading-relaxed
    `}
      >
        {message}
      </div>
    </div>
  );
};
