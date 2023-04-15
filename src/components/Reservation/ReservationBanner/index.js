import React from "react";
import { useTranslation } from "react-i18next";

const ReservationBanner = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="bg-center bg-[url('https://i.postimg.cc/c1Pr63fr/heading-bg-02.jpg')] bg-no-repeat bg-cover w-full h-[100vh] pt-[190px] pb-[190px] text-center flex items-center">
        <div className="w-full px-[10px] mx-auto">
          <div className="w-full max-w-full px-5 ">
            <h2 className="text-[50px] font-bold text-white mb-[30px] capitalize">
              {t("make your reservation")}
            </h2>
            <p className="px-[15%] text-white mb-[30px] text-[15px] leading-[30px]">
              {t(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt uttersi labore et dolore magna aliqua is ipsum suspendisse ultrices gravida"
              )}
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationBanner;
