import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="overflow-hidden  absolute z-40 sm:left-2 top-0 sm:top-3 bg-gradient-to-br from-[#151515] to-black sm:rounded-[10px] sm:my-2 sm:mx-0 sm:p-6 md:p-10 py-2 text-white w-full sm:w-fit sm:h-[96vh] flex sm:flex-col justify-center items-center">
        <button className="text-white hover:text-white rounded-[10px] sm:w-full bg-[#f09800] hover:bg-[#f09800]/60 sm:p-2 px-4 py-2 m-1">
          <a href="/">Contact</a>
        </button>
        <button className="text-white hover:text-white rounded-[10px] sm:w-full bg-[#f09800] hover:bg-[#f09800]/60 sm:p-2 px-4 py-2 m-1">
          <a href="/chart-page">Charts & Maps</a>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
