import React from "react";

const Header = () => (
  <div className="sticky top-0 z-50 h-auto bg-pokemon-secondaryBlue flex flex-row justify-between items-center text-pokemon-secondaryYellow px-4 py-6 shadow-[0_1.5rem_3rem_rgba(10,40,95,0.6)]">
    <h1 className="text-4xl uppercase">Logo</h1>
    <ul className="flex justify-between  basis-2/3">
      <li className="font-normal text-xl uppercase">option 1</li>
      <li className="font-normal text-xl uppercase">option 2</li>
      <li className="font-normal text-xl uppercase">option 3</li>
    </ul>
  </div>
);

export default Header;
