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
      <header className="flex justify-between items-center h-[100px] bg-teal-color px-[30px] large:h-[70px] large:px-[54px]">
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
              : "w-full bg-white flex flex-col fixed top-[100px] right-0 text-center large:mr-[22px]"
          }
        >
          <a href="#" className="border-b text-5 py-4 large:w-[120px] large:px-5 large:border-none large:text-4 large:text-white">
            Home
          </a>

          <a href="#" className="border-b text-5 py-4 large:w-[120px] large:px-5 large:border-none large:text-4 large:text-white">
            About
          </a>
 
          <a href="#" className="border-b text-5 py-4 large:w-[120px] large:px-5 large:border-none large:text-4 large:text-white">
            Deal
          </a>

          <a href="#" className="border-b text-5 py-4 large:w-[120px] large:px-5 large:border-none large:text-4 large:text-white">
            Reservation
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
