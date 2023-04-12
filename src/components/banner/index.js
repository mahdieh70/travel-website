import React, { useState, useRef, useEffect } from "react";
import { sliderData } from "./slider-data";
import ProgressBar from "../progressBar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
      <section className="h-[100dvh] ">
        <div>
          <div
            className="bg-center bg-no-repeat w-full h-[100dvh]"
            style={{
              backgroundImage: `linear-gradient(rgb(0 0 0 / 66%),rgb(0 0 0 / 59%)),url(${sliderData[currentSlide].image})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="pt-[30%] pb-[22%] flex justify-center items-center small:pt-[28%] small:pb-[15%] medium:pt-[24%] medium:pb-[12%] min-[820px]:pt-[25%] min-[820px]:pb-[12%] large:pt-[15%] large:pb-[15%]  xLarge:pt-[12%] xLarge:pb-[10%] xxLarge:pt-[10%] xxLarge:pb-[10%]">
              <div className=" flex-col flex-center ">
                <h2 className="text-white mx-[10px] text-center text-[17px] font-medium medium:text-[20px]">
                {t('Take a Glimpse Into The Beautiful Country Of')}
                </h2>
                <h1 className="text-white text-[38px] font-bold my-[18px] medium:text-[50px] ">
                {t(`${sliderData[currentSlide].countryName}`)}
                </h1>
                <div>
                  <Link
                    to={sliderData[currentSlide].countryName}
                    className="text-teal-color border border-solid border-teal-color button no-underline"
                  >
                    {t('Go There')}
                  </Link>
                </div>
              </div>
            </div>

            <div className=" mb-[30px] px-[15px] medium:px-[85px] medium:mt-0 min-[992px]:mb-[55px] large:px-[120px] large:mt-0 xLarge:px-[150px] xLarge:mt-0">
              <div className="bg-white rounded-[23px] px-[30px] py-[30px] medium:rounded-[60px] medium:py-[20px] large:px-0 xLarge:py-[25px]">
                <div className="flex flex-wrap">
                  <div className="w-1/2 flex items-center mb-[22px] px-[6px] medium:mb-[15px] min-[992px]:w-1/4 large:mb-0 large:justify-center">
                    <i className="fa-solid fa-user icon-xSmall medium:icon-medium"></i>
                    <div className="flex flex-col gap-y-2">
                      <span className="icon-header">{t('Population')}:</span>
                      <span className="text-[14px] font-bold text-teal-color">
                        {sliderData[currentSlide].population} M
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center mb-[22px] px-[6px] medium:mb-[15px] min-[992px]:w-1/4 large:mb-0 large:justify-center">
                    <i className="fa-solid fa-globe icon-xSmall medium:icon-medium"></i>
                    <div className="flex flex-col gap-y-2">
                      <span className="icon-header">{t('Territory')}:</span>
                      <span className="text-[14px] font-bold text-teal-color">
                        {sliderData[currentSlide].territory} KM2
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center mb-[22px] px-[6px] medium:mb-[15px] min-[992px]:w-1/4 large:mb-0 large:justify-center">
                    <i className="fa-solid fa-house icon-xSmall medium:icon-medium"></i>
                    <div className="flex flex-col gap-y-2">
                      <span className="icon-header">{t('AVG Price')}:</span>
                      <span className="text-[14px] font-bold text-teal-color">
                        ${sliderData[currentSlide].avgPrice}
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center mb-[22px] px-[6px] min-[992px]:w-1/4  large:mb-0 large:justify-center">
                    <div>
                      <a
                        href="#"
                        className="button text-white font-['Poppins'] border-none bg-teal-color no-underline medium:py-4"
                      >
                        {t('Explore More')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="flex justify-center items-center">
              <div className="flex-center text-center w-[70%] ">
                {sliderData.map((slide, slideIndex) => (
                  <div className="flex flex-col gap-[14px] w-[7%] mx-[16px] medium:w-[15%] large:w-[19.5%] ">
                    <ProgressBar />
                    <span
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      className="slider-number"
                    >
                      {slideIndex + 1}
                    </span>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
