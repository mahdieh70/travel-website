// import React, { useState, useRef, useEffect } from "react";
// import { iranOffersSlider } from "../../sliders/offerSliders/offersSlider";

// const delay = 6000;

// const WeeklyOffersIran = () => {
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
//           prevIndex === iranOffersSlider.length - 1 ? 0 : prevIndex + 1
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
//       <section className="mt-[120px] pb-[120px] border-b border-solid border-[#eee] border-t-0">
//         <div className="px-3">
//           <div className="mb-[80px] text-center">
//             <h2 className="mb-5 leading-[36px] text-[30px] font-bold capitalize text-[#2a2a2a]">
//               Best Weekly Offers In Each City
//             </h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore.
//             </p>
//           </div>
//         </div>
//         <div className="relative mx-[15px]">
//           <div>
//             <div>
//               <img
//                 src={iranOffersSlider[currentSlide].image}
//                 alt="imag"
//                 className="h-full w-full pr-[160px] aspect-[1] rounded-[23px]"
//               />
//             </div>
//             <div
//               className="absolute right-0 top-[50%] py-[30px] px-[30px]  bg-white shadow-md rounded-[23px]"
//               style={{ transform: "translateY(-50%)" }}
//             >
//               <div className="flex justify-between">
//                 <div>
//                   <h4 className="text-[20px] text-[#2a2a2a] font-bold">
//                     {iranOffersSlider[currentSlide].location}
//                     <br />
//                     <span className="text-[15px] text-[#afafaf]">
//                       {iranOffersSlider[currentSlide].town}
//                     </span>
//                   </h4>
//                 </div>
//                 <h4 className="text-teal-color text-[20px] font-bold">$420</h4>
//               </div>

//               <ul className="border-t border-solid border-[#eeeeee] border-b-0 border-x-0 list-none mt-[25px] pt-[25px]">
//                 <li className="text-[#2a2a2a] font-semibold text-[14px] mb-[10px]">
//                   Deal Includes:
//                 </li>
//                 <li className="text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px]">
//                   <i className="fa-solid fa-taxi mr-[5px]"></i>5 Days Trip &gt;
//                   Hotel Included
//                 </li>
//                 <li className="text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px]">
//                   <i className="fa-solid fa-plane mr-[5px]"></i>Airplane Bill
//                   Included
//                 </li>
//                 <li className="text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px]">
//                   <i className="fa-solid fa-building mr-[5px]"></i>Daily Places
//                   Visit
//                 </li>
//               </ul>
//               <div className="mt-[30px]">
//                 <a
//                   href="#"
//                   className="text-center text-[14px] text-white bg-teal-color py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] no-underline overflow-hidden"
//                 >
//                   Make A Reservation
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default WeeklyOffersIran;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import "../../../index.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const WeeklyOffersIran = ({ iranOffersSlider }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="mt-[120px] pb-[120px] border-b border-solid border-[#eee] border-t-0">
        <div className="px-3">
          <div className="mb-[80px] text-center">
            <h2
              className={
                i18n.language === "en"
                  ? "mb-5 leading-[36px] text-[30px] font-bold capitalize text-[#2a2a2a]"
                  : "mb-5 leading-[36px] text-[30px] font-bold capitalize text-[#2a2a2a] direction"
              }
            >
              {t("Best Weekly Offers In Each City")}
            </h2>
            <p className={i18n.language === "fa" && "direction"}>
              {t(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              )}
            </p>
          </div>
        </div>
        <div className="relative mx-[15px] ">
          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                800: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
              autoplay={true}
              pagination={true}
            >
              {iranOffersSlider.map((slide) => (
                <SwiperSlide key={slide.image}>
                  <img
                    src={slide.image}
                    alt="imag"
                    className="w-full h-full pr-[160px] aspect-[1] rounded-[23px]"
                  />
                  <h4
                    className={
                      i18n.language === "en"
                        ? "absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold"
                        : "absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold direction"
                    }
                  >
                    {slide.townName}
                  </h4>
                  <div
                    className="absolute right-0 top-[50%] py-[20px] px-[15px] bg-white shadow-md rounded-[23px]"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <div
                      className={
                        i18n.language === "en"
                          ? "flex justify-between flex-row"
                          : "flex justify-between flex-row-reverse"
                      }
                    >
                      <div>
                        <h4
                          className={
                            i18n.language === "en"
                              ? "text-[15px] text-[#2a2a2a] font-bold"
                              : "text-[20px] text-[#2a2a2a] font-bold direction"
                          }
                        >
                          {t(`${slide.location}`)}
                          <br />
                          <span
                            className={
                              i18n.language === "en"
                                ? "text-[15px] text-[#afafaf]"
                                : "text-[15px] text-[#afafaf] direction"
                            }
                          >
                            {t(`${slide.town}`)}
                          </span>
                        </h4>
                      </div>
                      <h4 className="text-teal-color text-[16px] font-bold">
                        $420
                      </h4>
                    </div>

                    <ul
                      className={
                        i18n.language === "en"
                          ? "border-t border-solid border-[#eeeeee] border-b-0 border-x-0 list-none mt-[25px] pt-[25px] "
                          : "border-t border-solid border-[#eeeeee] border-b-0 border-x-0 list-none mt-[25px] pt-[25px] text-right"
                      }
                    >
                      <li
                        className={
                          i18n.language === "en"
                            ? "text-[#2a2a2a] font-semibold text-[14px] mb-[10px]"
                            : "text-[#2a2a2a] font-semibold text-[14px] mb-[10px] direction"
                        }
                      >
                        {t("Deal Includes:")}
                      </li>
                      <li
                        className={
                          i18n.language === "en"
                            ? "text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px]"
                            : "text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px] direction"
                        }
                      >
                        <i
                          className={
                            i18n.language === "en"
                              ? "fa-solid fa-taxi mr-[5px]"
                              : "fa-solid fa-taxi ml-[5px]"
                          }
                        ></i>
                        {t("5 Days Trip")}
                        &gt; {t("Hotel Included")}
                      </li>
                      <li
                        className={
                          i18n.language === "en"
                            ? "text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px]"
                            : "text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px] direction"
                        }
                      >
                        <i
                          className={
                            i18n.language === "en"
                              ? "fa-solid fa-plane mr-[5px]"
                              : "fa-solid fa-plane ml-[5px]"
                          }
                        ></i>
                        {t("Airplane Bill Included")}
                      </li>
                      <li
                        className={
                          i18n.language === "en"
                            ? "text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px]"
                            : "text-[14px] text-[#afafaf] mb-[10px] tracking-[0.5px] direction"
                        }
                      >
                        <i
                          className={
                            i18n.language === "en"
                              ? "fa-solid fa-building mr-[5px]"
                              : "fa-solid fa-building ml-[5px]"
                          }
                        ></i>
                        {t("Daily Places Visit")}
                      </li>
                    </ul>
                    <div className="mt-[30px]">
                      <a
                        href="#"
                        className={
                          i18n.language === "en"
                            ? "text-center text-[14px] text-white bg-teal-color py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] no-underline overflow-hidden"
                            : "text-center text-[14px] text-white bg-teal-color py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] no-underline overflow-hidden direction"
                        }
                      >
                        {t("Make A Reservation")}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeeklyOffersIran;
