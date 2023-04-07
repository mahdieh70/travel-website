import React, { useEffect, useState, useRef } from "react";
import { citiesOfItalyData } from "../../sliders/citiesAndTownSlider/index";

const delay = 6000;
const CitiesAndTownOfItaly = () => {
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
          prevIndex === citiesOfItalyData.length - 1 ? 0 : prevIndex + 1
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
      <section className="bg-white relative mt-[-70px] py-[50px] px-[50px] rounded-[23px] shadow-md">
        <div className="mx-3">
          <div className="flex flex-col w-full ">
            <div className="text-center ">
              <h2 className="text-[30px] mb-[30px] text-[#2a2a2a]">
                Iran's <span className="text-teal-color">Cities & Towns</span>
              </h2>
            </div>
            <div className="rounded-[10px] overflow-hidden relative">
              <img
                src={citiesOfItalyData[currentSlide].image}
                alt="imag"
                className="aspect-square w-full h-full"
              />
              <h4 className="absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold">
                {citiesOfItalyData[currentSlide].townName}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CitiesAndTownOfItaly;
