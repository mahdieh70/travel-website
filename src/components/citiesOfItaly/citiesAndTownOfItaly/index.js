
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

//style
import "../../../index.css";

const CitiesAndTownOfIran = ({ citiesOfItalyData }) => {
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
                </span>{" "}
                {t("Of Italy")}
              </h2>
            </div>

            <div className="rounded-[10px] overflow-hidden relative ">
              <Swiper
                style={{
                  "--swiper-pagination-color": "#FFBA08",

                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-size": "14px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px",
                }}
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
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {citiesOfItalyData.map((slide) => (
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
