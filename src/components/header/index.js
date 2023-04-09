import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

//logo
import logo from "../../assets/logo/logoipsum-2.svg";

//components
import HamburgerMenu from "./hamburgerMenu";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  return (
    <>
      <header className="flex justify-between z-50 fixed top-0 right-0 w-full items-center h-[70px] bg-teal-color px-[30px] shadow-md large:h-[70px] large:px-[160px] xLarge:px-[50px]">
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
              : "w-full bg-white flex flex-col fixed top-[100px] right-0  text-center large:mr-[22px] z-50 shadow-md"
          }
        >
           
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-teal-color border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
                : "text-[#1e1e1e] border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
            }
          >
            {t('Home')}
          </NavLink>

          <NavLink
            to="iran"
            className={({ isActive }) =>
              isActive
                ? "text-teal-color border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
                : "text-[#1e1e1e] border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
            }
          >
             {t('About')}
          </NavLink>

          <a
            href="#"
            className="text-[#1e1e1e] border-t-0 border-x-0 border-b border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
          >
             {t('Deal')}
          </a>

          <NavLink
            to="reservation"
            className="text-[#1e1e1e] border-t-0 border-x-0 border-b border-solid border-[#eee] no-underline text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
          >
            {t('Reservation')}
          </NavLink>
          <div className="flex items-center w-[100px] mx-[10px]">
            <select style={{ width: 200 }} onChange={changeLanguageHandler}>
              <option value="en">English</option>
              <option value="fa">فارسی</option>
            </select>
          </div>
         
        </nav>
      </header>
    </>
  );
};

export default Header;
