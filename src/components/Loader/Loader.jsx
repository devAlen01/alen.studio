import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-[40px]">
      <div className="rounded-full h-20 w-20 bg-green-500 animate-ping"></div>
      <div className="rounded-full h-20 w-20 bg-red-500 animate-ping"></div>
      <div className="rounded-full h-20 w-20 bg-violet-500 animate-ping"></div>
    </div>
  );
};

export default Loader;
