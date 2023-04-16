import React, { useState, useRef, useEffect } from "react";
import { sliderData } from "./slider-data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../index.css";

const delay = 6000;

const Banner = () => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide((prevIndex) =>
          prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <section className="h-[100vh] min-h-[700px] text-white bg-[#222] relative block">
        <div className="relative w-full h-full text-white text-[16px] ">
          <div
            className="relative overflow-hidden"
            style={{ width: "inherit", height: "inherit" }}
          >
            <div
              className="bg-cover absolute top-0 left-0 text-center bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgb(0 0 0 / 66%),rgb(0 0 0 / 59%)),url(${sliderData[currentSlide].image})`,
                width: "inherit",
                height: "inherit",
                transition: "all 0.5s ease",
              }}
            >
              <div className="pt-[120px] h-full text-center">
                <div
                  className="absolute w-full top-[32%] medium:top-[40%] "
                  style={{ transform: "translateY(-50%)" }}
                >
                  <h2
                    className={
                      i18n.language === "en"
                        ? "text-[14px] font-medium text-white mb-5 small:text-[20px]"
                        : "direction text-[20px] font-medium text-white mb-5 small:text-[30px]"
                    }
                  >
                    {t("Take a Glimpse Into The Beautiful Country Of")}
                  </h2>
                  <h1 className="text-[36px] text-white font-bold mb-[30px] small:text-[50px]">
                    {t(`${sliderData[currentSlide].countryName}`)}
                  </h1>
                  <div>
                    <Link
                      to={sliderData[currentSlide].countryName}
                      className={
                        i18n.language === "en"
                          ? "text-[14px] bg-transparent text-teal-color py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] relative overflow-hidden no-underline border border-solid border-teal-color"
                          : "text-[16px] bg-transparent text-teal-color py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] relative overflow-hidden no-underline border border-solid border-teal-color direction"
                      }
                    >
                      {t("Go There")}
                    </Link>
                  </div>
                </div>
                <div
                  className="py-[30px] px-[30px] mt-[30px] rounded-[23px] absolute bg-white inline-block bottom-[110px]  w-[95%] small:max-w-[540px] medium:max-w-[720px] medium:mt-[60px] medium:px-[60px] medium:py-[30px] medium:rounded-[61px] medium:absolute medium:bottom-[120px] large:max-w-[960px] min-[1200px]:max-w-[1140px] xxLarge:max-w-[1320px]"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div
                    className={
                      i18n.language === "en"
                        ? "flex flex-wrap large:flex-nowrap large:flex-row"
                        : "flex flex-wrap large:flex-nowrap large:flex-row-reverse"
                    }
                  >
                    <div className="flex-[0_0_auto] w-1/2 max-w-full px-[10px] large:w-[25%]">
                      <i className="fa-solid fa-user float-left w-9 h-9 leading-[34px] text-[18px] mr-[10px] mt-2 text-teal-color inline-block text-center rounded-full border border-solid border-teal-color medium:text-[24px] medium:w-[60px] medium:h-[60px] medium:leading-[58px] medium:mr-5 medium:mt-0"></i>
                      <div className="text-[14px] text-teal-color font-bold leading-7 mb-[15px] flex flex-col items-start">
                        <span
                          className={
                            i18n.language === "en"
                              ? "text-[12px] text-[#afafaf] font-normal"
                              : "text-[16px] text-[#afafaf] font-normal direction "
                          }
                        >
                          {t("Population")}:
                        </span>
                        <span>{sliderData[currentSlide].population} M</span>
                      </div>
                    </div>
                    <div className="flex-[0_0_auto] w-1/2 max-w-full px-[10px] large:w-[25%]">
                      <i className="fa-solid fa-user float-left w-9 h-9 leading-[34px] text-[18px] mr-[10px] mt-2 text-teal-color inline-block text-center rounded-full border border-solid border-teal-color medium:text-[24px] medium:w-[60px] medium:h-[60px] medium:leading-[58px] medium:mr-5 medium:mt-0"></i>
                      <div className="text-[14px] text-teal-color font-bold leading-7 mb-[15px] flex flex-col items-start">
                        <span
                          className={
                            i18n.language === "en"
                              ? "text-[12px] text-[#afafaf] font-normal"
                              : "text-[16px] text-[#afafaf] font-normal direction "
                          }
                        >
                          {t("Territory")}:
                        </span>
                        <span>{sliderData[currentSlide].territory} KM2</span>
                      </div>
                    </div>
                    <div className="flex-[0_0_auto] w-1/2 max-w-full px-[10px] large:w-[25%]">
                      <i className="fa-solid fa-user float-left w-9 h-9 leading-[34px] text-[18px] mr-[10px] mt-2 text-teal-color inline-block text-center rounded-full border border-solid border-teal-color medium:text-[24px] medium:w-[60px] medium:h-[60px] medium:leading-[58px] medium:mr-5 medium:mt-0"></i>
                      <div className="text-[14px] text-teal-color font-bold leading-7 mb-[15px] flex flex-col items-start">
                        <span
                          className={
                            i18n.language === "en"
                              ? "text-[12px] text-[#afafaf] font-normal"
                              : "text-[16px] text-[#afafaf] font-normal direction "
                          }
                        >
                          {t("AVG Price")}:
                        </span>
                        <span>${sliderData[currentSlide].avgPrice}</span>
                      </div>
                    </div>
                    <div className="flex-[0_0_auto] w-1/2 max-w-full px-[10px] large:w-[25%]">
                      <div className="text-left mt-2 ">
                        <Link
                          to={sliderData[currentSlide].countryName}
                          className={
                            i18n.language === "en"
                              ? "text-center text-[14px] text-white bg-teal-color py-4 px-[24px] inline-block rounded-[25px] no-underline font-medium capitalize tracking-[0.5px] relative overflow-hidden large:px-[30px]"
                              : "text-center text-[14px] text-white bg-teal-color py-4 px-[24px] inline-block rounded-[25px] no-underline font-medium capitalize tracking-[0.5px] relative overflow-hidden large:px-[30px] direction"
                          }
                          style={{ transition: "all 0.3s" }}
                        >
                          {t("Explore More")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="absolute bottom-[30px] w-full z-[10px] text-center block">
            <div className="block w-[70%] mx-auto text-white ">
              {sliderData.map((slide, slideIndex) => (
                <label
                  key={slide.id}
                  onClick={() => goToSlide(slideIndex)}
                  className="w-[7%] relative inline-block h-[3.1em] overflow-hidden mx-[1em] pt-[1em] text-left uppercase text-[1em] text-[#f6eac5] font-normal cursor-pointer large:w-[19.5%] "
                  style={{ transition: "all 0.3s" }}
                >
                  <span className="absolute top-0 left-0 h-[2px] w-full bg-[#f6eac5] ">
                    <span></span>
                  </span>
                  <span className="text-[20px] font-medium text-center inline-block w-full">
                    {slideIndex + 1}
                  </span>
                </label>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Banner;
