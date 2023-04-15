// import React, { useState, useEffect, useRef } from "react";

// const delay = 6000;

// const CitiesAndTownOfIran = ({ citiesOfTurkeyData }) => {
//   const [index, setIndex] = useState(0);
//   const timeoutRef = useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === citiesOfTurkeyData.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <>
//       <section className="bg-white relative mt-[-70px] py-[50px] px-[50px] rounded-[23px] shadow-md mx-auto small:max-w-[540px] medium:max-w-[720px] ">
//         <div className="flex flex-wrap">
//           <div className="mx-3">
//             <div className="flex flex-col w-full ">
//               <div className="text-center">
//                 <h2 className="text-[30px] mb-[30px] text-[#2a2a2a]">
//                   Iran's <span className="text-teal-color">Cities & Towns</span>
//                 </h2>
//               </div>
//               <div className="my-0 mx-auto overflow-hidden max-w-[500px] medium:max-w-[600px]">
//                 <div
//                   className="whitespace-nowrap "
//                   style={{
//                     transform: `translate3d(${-index * 100}%, 0, 0)`,
//                     transition: "ease 0.25s",
//                   }}
//                 >
//                   {citiesOfTurkeyData.map((slide, index) => (
//                     <div
//                       key={index}
//                       className="rounded-[10px] w-full h-[400px] overflow-hidden inline-block relative medium:h-[600px] "
//                     >
//                       <img
//                         src={slide.image}
//                         alt="imag"
//                         className="aspect-square w-full h-full"
//                       />
//                       <h4 className="absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold">
//                         {citiesOfTurkeyData.townName}
//                       </h4>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-center">
//                   {citiesOfTurkeyData.map((_, idx) => (
//                     <div
//                       key={idx}
//                       className={`slideshowDot${
//                         index === idx
//                           ? "text-center inline-block w-5 h-5 rounded-full cursor-pointer mt-[15px] mx-[7px] mb-0 bg-[#6a0dad]"
//                           : " text-center inline-block w-5 h-5 rounded-full cursor-pointer mt-[15px] mx-[7px] mb-0 bg-[#c4c4c4]"
//                       }`}
//                       onClick={() => {
//                         setIndex(idx);
//                       }}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CitiesAndTownOfIran;

// import React, { useEffect, useState, useRef } from "react";

// import { citiesOfIranData } from "../../sliders/citiesAndTownSlider/index";

// const delay = 6000;

// const CitiesAndTownOfIran = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const timeoutRef = useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setCurrentSlide((prevIndex) =>
//           prevIndex === citiesOfIranData.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [currentSlide]);

//   const goToSlide = (slideIndex) => {
//     setCurrentSlide(slideIndex);
//   };
//   return (
//     <>
//       <section className="bg-white relative mt-[-70px] py-[50px] px-[50px] rounded-[23px] shadow-md">
//         <div className="mx-3">
//           <div className="flex flex-col w-full ">
//             <div className="text-center ">
//               <h2 className="text-[30px] mb-[30px] text-[#2a2a2a]">
//                 Iran's <span className="text-teal-color">Cities & Towns</span>
//               </h2>
//             </div>
//             <div
//               className="rounded-[10px] overflow-hidden relative"

//             >
//               <img
//                 src={citiesOfIranData[currentSlide].image}
//                 alt="imag"
//                 className="aspect-square w-full h-full"
//               />
//               <h4 className="absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold">
//                 {citiesOfIranData[currentSlide].townName}
//               </h4>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CitiesAndTownOfIran;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import React from "react";
import "../../../index.css";

const CitiesAndTownOfIran = ({ citiesOfIranData }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="bg-white relative mt-[-70px] py-[50px] px-[50px] rounded-[23px] shadow-md mx-auto small:max-w-[540px]  small:mx-auto medium:max-w-[720px] large:max-w-[960px] xLarge:max-w-[1140px]">
        <div className="mx-3">
          <div className="flex flex-col w-full ">
            <div className="text-center ">
              <h2
                className={
                  i18n.language === "en"
                    ? "text-[30px] mb-[30px] text-[#2a2a2a]"
                    : "text-[30px] mb-[30px] text-[#2a2a2a] direction"
                }
              >
                <span
                  className={
                    i18n.language === "en"
                      ? "text-teal-color"
                      : "text-teal-color direction"
                  }
                >
                  {t("Cities & Towns")}
                </span>

                {t("Of Iran")}
              </h2>
            </div>

            <div className="rounded-[10px] overflow-hidden relative ">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                  767: {
                    slidesPerView: 2,
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={true}
                pagination={true}
              >
                {citiesOfIranData.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <img
                      src={slide.image}
                      alt="imag"
                      className="aspect-square w-full h-full"
                    />
                    <h4
                      className={
                        i18n.language === "en"
                          ? "absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold"
                          : "absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold direction"
                      }
                    >
                      {t(`${slide.townName}`)}
                    </h4>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CitiesAndTownOfIran;
