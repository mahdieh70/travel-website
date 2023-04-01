import React, { useState, useRef, useEffect } from "react";
import { sliderData } from "./slider-data";
import ProgressBar from "../progressBar";

const delay = 6000;

const Banner = () => {
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
      <section>
        <div>
          <div
            className="bg-center bg-no-repeat w-full h-[calc(100vh-100px)] large:h-[calc(100vh-70px)]"
            style={{
              backgroundImage: `linear-gradient(rgb(0 0 0 / 66%),rgb(0 0 0 / 59%)),url(${sliderData[currentSlide].image})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="py-[50px] large:py-[100px] xLarge:py-[100px]">
              <div className=" flex-col flex-center ">
                <h2 className="text-white text-[17px] medium:text-[20px]">
                  Take a Glimpse Into The Beautiful Country Of:
                </h2>
                <h1 className="text-white text-[38px] font-bold mb-[18px] medium:text-[50px] ">
                  {sliderData[currentSlide].countryName}
                </h1>
                <div>
                  <a
                    href="#"
                    className="text-teal-color border border-solid border-teal-color button"
                  >
                    Go There
                  </a>
                </div>
              </div>
            </div>

            <div className=" mb-[30px] px-[15px] medium:px-[110px] medium:mt-0 min-[992px]:mb-[55px] large:px-[120px] large:mt-0 xLarge:px-[150px] xLarge:mt-0">
              <div className="bg-white rounded-[23px] px-[30px] py-[30px] medium:rounded-[60px] medium:py-[20px] large:px-0">
                <div className="flex flex-wrap">
                  <div className="w-1/2 flex items-center mb-[22px] px-[6px] medium:mb-[15px] min-[992px]:w-1/4 large:mb-0 large:justify-center">
                    <i className="fa-solid fa-user icon-xSmall medium:icon-medium"></i>
                    <div className="flex flex-col gap-y-2">
                      <span className="icon-header">Population:</span>
                      <span className="text-[14px] font-bold text-teal-color">
                        {sliderData[currentSlide].population} M
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center mb-[22px] px-[6px] medium:mb-[15px] min-[992px]:w-1/4 large:mb-0 large:justify-center">
                    <i className="fa-solid fa-globe icon-xSmall medium:icon-medium"></i>
                    <div className="flex flex-col gap-y-2">
                      <span className="icon-header">Territory:</span>
                      <span className="text-[14px] font-bold text-teal-color">
                        {sliderData[currentSlide].territory} KM2
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center mb-[22px] px-[6px] medium:mb-[15px] min-[992px]:w-1/4 large:mb-0 large:justify-center">
                    <i className="fa-solid fa-house icon-xSmall medium:icon-medium"></i>
                    <div className="flex flex-col gap-y-2">
                      <span className="icon-header">AVG Price:</span>
                      <span className="text-[14px] font-bold text-teal-color">
                        ${sliderData[currentSlide].avgPrice}
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center mb-[22px] px-[6px] min-[992px]:w-1/4  large:mb-0 large:justify-center">
                    <div>
                      <a
                        href="#"
                        className="button text-white border-none bg-teal-color "
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="flex justify-center items-center">
              <div className="flex-center text-center w-[70%] ">
                {sliderData.map((slide, slideIndex) => (
                  <div className="flex flex-col gap-[14px] w-[5%] mx-[16px] medium:w-[15%] large:w-[19.5%] ">
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
