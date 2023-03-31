import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import HamburgerMenu from "./hamburgerMenu";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <>
      <header className="flex justify-between items-center h-[100px] bg-teal-color px-[30px]">
        <img src={logo} alt="logo" />
        <div
          className="w-8 h-8 flex flex-col justify-around large:hidden "
          onClick={toggleHamburger}
        >
          <HamburgerMenu isOpen={hamburgerOpen} />
        </div>

        <nav
          className={
            !hamburgerOpen
              ? "hidden text-center large:flex"
              : "w-full bg-white flex flex-col fixed top-[100px] right-0 text-center"
          }
        >
          <a href="#" className="border-b text-5 py-4">
            Home
          </a>

          <a href="#" className="border-b text-5 py-4">
            About
          </a>

          <a href="#" className="border-b text-5 py-4">
            Deal
          </a>

          <a href="#" className="border-b text-5 py-4">
            Reservation
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
