import React from "react";

function NavBar() {
  return (
    <nav className="w-full inline-flex justify-between p-6 barra">
      <h1 className="text-4xl font-normal leading-10 py-2 px-4">Turismo web</h1>
      <ul className="inline-flex text-center grow items-center">
        <li className="w-28 p-2">
          <span className="text-base font-normal ">Home</span>
        </li>
        <li className="w-28 p-2">
          <span className="text-base font-normal">About us</span>
        </li>
        <li className="w-28 p-2">
          <span className="text-base font-normal">Contact</span>
        </li>
      </ul>
      <div className="text-base font-bold p-4">Lang</div>
    </nav>
  );
}

export default NavBar;
