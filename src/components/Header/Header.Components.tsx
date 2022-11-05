import React from "react";

const Header = () => (
  <div className="w-screen h-auto bg-[#0075BE] flex flex-row justify-between items-center text-[#FFCC00] px-4 py-6 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
    <h1 className="text-4xl uppercase">Logo</h1>
    <ul className="flex justify-between  basis-2/3">
      <li className="font-normal text-xl uppercase">option 1</li>
      <li className="font-normal text-xl uppercase">option 2</li>
      <li className="font-normal text-xl uppercase">option 3</li>
    </ul>
  </div>
);

export default Header;
