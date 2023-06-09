
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y} from "swiper";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

//style
import "../../../index.css";

const WeeklyOffersIran = ({ iranOffersSlider }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const handleClick = () => navigate("/reservation");
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
            style={{
              "--swiper-pagination-color": "#FFBA08",
             
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "14px",
              "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
  
              breakpoints={{
                800: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
             
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
                              : "text-[16px] text-[#2a2a2a] font-bold direction"
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
                    <div className="mt-[20px]">
                      <Link
                        onClick={handleClick}
                        to="/reservation"
                        className={
                          i18n.language === "en"
                            ? "text-center text-[14px] text-white bg-teal-color py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] no-underline overflow-hidden"
                            : "text-center text-[14px] text-white bg-teal-color py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] no-underline overflow-hidden direction"
                        }
                      >
                        {t("Make A Reservation")}
                      </Link>
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
