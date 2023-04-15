// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// //logo
// import logo from "../../assets/logo/logoipsum-2.svg";

// //components
// import HamburgerMenu from "./hamburgerMenu";

// const Header = () => {
//   const { t, i18n } = useTranslation();
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);

//   const toggleHamburger = () => {
//     setHamburgerOpen(!hamburgerOpen);

//   };

//   const changeLanguageHandler = (e) => {
//     const languageValue = e.target.value;
//     i18n.changeLanguage(languageValue);
//   };
//   return (
//     <>
//       <header className="flex justify-between z-50 fixed top-0 right-0 w-full items-center h-[70px] bg-teal-color px-[30px] shadow-md large:h-[70px] large:px-[160px] xLarge:px-[50px]">
//         <img src={logo} alt="logo" />
//         <div className="flex gap-x-2.5">
//           <div
//             className="w-8 h-8 flex flex-col justify-around large:hidden "
//             onClick={toggleHamburger}
//           >
//             <HamburgerMenu isOpen={hamburgerOpen} />
//           </div>
//           <nav
//             className={
//               !hamburgerOpen
//                 ? "hidden text-center large:flex"
//                 : "w-full bg-white flex flex-col fixed top-[70px] right-0  text-center large:mr-[22px] z-50 shadow-md"
//             }
//           >
//             <NavLink
//               to="/"

//               className={({ isActive }) =>
//                 isActive
//                   ? "text-teal-color border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
//                   : "text-[#1e1e1e] border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
//               }
//             >
//               {t("Home")}
//             </NavLink>

//             <NavLink
//               to="iran"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-teal-color border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
//                   : "text-[#1e1e1e] border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
//               }
//             >
//               {t("About")}
//             </NavLink>

//             <NavLink
//               to="deal"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-teal-color border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
//                   : "text-[#1e1e1e] border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
//               }
//             >
//               {t("Deal")}
//             </NavLink>

//             <NavLink
//               to="reservation"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-teal-color border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
//                   : "text-[#1e1e1e] border-t-0 border-x-0  border-solid border-[#eee] no-underline border-b text-5 py-4 mx-[10px] large:w-[100px]  large:border-none large:text-4 large:text-white"
//               }
//             >
//               {t("Reservation")}
//             </NavLink>
//           </nav>
//           <div className="flex items-center w-[100px] mx-[10px]">
//             <select style={{ width: 200 }} onChange={changeLanguageHandler}>
//               <option value="en">English</option>
//               <option value="fa">فارسی</option>
//             </select>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../index.css";

//logo
import logo from "../../assets/logo/logoipsum-2.svg";

const Header = () => {
  const [navbar, setNavbar] = useState(true);
  const [menu, setMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <>
      <header
        className={
          navbar
            ? "flex justify-between z-50 fixed top-0 right-0 w-full items-center h-[70px] bg-teal-color shadow-md  large:h-[70px] large:px-[100px] xLarge:px-[50px]"
            : "hidden"
        }
      >
        <nav className="flex justify-between items-center w-full h-full relative large:static large:flex large:justify-between ">
          <div className="ml-5">
            <img src={logo} alt="logo" />
          </div>
          <ul
            className={
              menu
                ? "flex-row-reverse absolute top-[70px] w-full text-center bg-white large:static large:bg-teal-color large:list-none large:flex large:top-0"
                : "hidden large:flex large:list-none"
            }
            onClick={() => setMenu(false)}
          >
            <li className="py-[10px] border-b border-solid border-[#eee] border-x-0 border-t-0 large:py-0 large:border-0">
              <NavLink
                to="/"
                className={
                  i18n.language === "en"
                    ? "text-[16px] text-black mx-[30px] no-underline active:active"
                    : "direction text-[20px] text-black mx-[30px] no-underline active:active"
                }
              >
                {t("Home")}
              </NavLink>
            </li>
            <li className="py-[10px] border-b border-solid border-[#eee] border-x-0 border-t-0 large:py-0 large:border-0">
              <NavLink
                to="/iran"
                className={
                  i18n.language === "en"
                    ? "text-[16px] text-black mx-[30px] no-underline"
                    : "direction text-[20px] text-black mx-[30px] no-underline"
                }
              >
                {t("About")}
              </NavLink>
            </li>
            <li className="py-[10px] border-b border-solid border-[#eee] border-x-0 border-t-0 large:py-0 large:border-0">
              <NavLink
                to="/deal"
                className={
                  i18n.language === "en"
                    ? "text-[16px] text-black mx-[30px] no-underline"
                    : "direction text-[20px] text-black mx-[30px] no-underline"
                }
              >
                {t("Deal")}
              </NavLink>
            </li>
            <li className="py-[10px] border-b border-solid border-[#eee] border-x-0 border-t-0 large:py-0 large:border-0">
              <NavLink
                to="/reservation"
                className={
                  i18n.language === "en"
                    ? "text-[16px] text-black mx-[30px] no-underline"
                    : "direction text-[20px] text-black mx-[30px] no-underline"
                }
              >
                {t("Reservation")}
              </NavLink>
            </li>
          </ul>
          <div className="flex">
            <div className="flex items-center w-[100px] mr-5">
              <select
                style={{
                  width: 200,
                  border: "none",
                  borderRadius: "5px",
                  padding: "3px",
                }}
                onChange={changeLanguageHandler}
              >
                <option value="en">English</option>
                <option value="fa">فارسی</option>
              </select>
            </div>
            <div className="mr-5 text-[24px] text-neutral-700">
              <div
                className="block large:hidden"
                onClick={() => setMenu(!menu)}
              >
                {menu ? (
                  <i className="fa-solid fa-xmark"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
