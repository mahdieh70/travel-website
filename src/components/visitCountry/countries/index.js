import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../../../index.css";

const Countries = ({
  image,
  country,
  contenient,
  population,
  territory,
  averagePrice,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="mb-[30px] small:flex xLarge:w-[48%] ">
        <div className="small:flex ">
          <div className=" w-full overflow-hidden">
            <img
              src={image}
              alt="iran"
              className="w-full h-full rounded-[23px] aspect-square small:w-[200px] small:h-[200px] medium:w-[280px] medium:h-[280px] xLarge:w-[220px] xLarge:h-[220px]"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-9 small:ml-5">
            <div
              className={
                i18n.language === "en"
                  ? "flex justify-between items-center mt-5"
                  : "flex justify-between items-center mt-5 direction"
              }
            >
              <div>
                <h4
                  className={
                    i18n.language === "en"
                      ? "text-[20px] mb-[5px]"
                      : "text-[20px] mb-[5px] direction"
                  }
                >
                  {t(`${country}`)}
                </h4>
                <span
                  className={
                    i18n.language === "en"
                      ? "text-[#afafaf] text-4"
                      : "text-[#afafaf] text-4 direction"
                  }
                >
                  {t(`${contenient}`)}
                </span>
              </div>
              <div>
                <Link
                  to={country}
                  className={
                    i18n.language === "en"
                      ? "text-[14px] py-[14px] px-[15px] text-white bg-teal-color inline-block rounded-[25px] no-underline tracking-[1px] font-bold"
                      : "text-[14px] py-[14px] px-[15px] text-white bg-teal-color inline-block rounded-[25px] no-underline tracking-[1px] font-bold direction"
                  }
                >
                  {t("Explore More")}
                </Link>
              </div>
            </div>
            <p
              className={
                i18n.language === "en"
                  ? "text-[#afafaf] my-[18px] leading-7 small:text-[16px]"
                  : "text-[#afafaf] my-[18px] leading-7 small:text-[16px] direction"
              }
            >
              {t(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
              )}
            </p>
            <ul className="flex list-none border-y border-x-0 border-solid border-[#eee] py-[15px] small:py-5 medium:py-3">
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center">
                <i className="fa-solid fa-user mr-[5px] text-[16px]"></i>
                {population} Mil People
              </li>
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center ">
                <i className="fa-solid fa-globe mr-[5px] text-[16px]"></i>
                {territory} Km2
              </li>
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center ">
                <i className="fa-solid fa-house mr-[5px] text-[16px]"></i>$
                {averagePrice}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
