import React from "react";
import { useTranslation } from "react-i18next";
import "../../../index.css";

const IranSectionBanner = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="mt-[70px] large:mt-[70px]">
        <div className="bg-center bg-[url('https://i.postimg.cc/DfHBbVg8/banner.jpg')] bg-no-repeat bg-cover bg-fixed py-[130px] w-full ">
          <div className="mx-auto px-[10px]  max-w-[540px] medium:max-w-[720px] large:max-w-[960px] xLarge:max-w-[1140px] xxLarge:max-w-[1320px]">
            <div>
              <div className="text-white rounded-[23px] text-center py-30 px-15 relative overflow-hidden z-[2] py-[120px] px-[60px]">
                <div
                  className="w-full h-full bg-center bg-[url('https://i.postimg.cc/DfHBbVg8/banner.jpg')] bg-no-repeat bg-fixed bg-cover absolute left-0 top-0 z-[1]"
                  style={{ filter: "blur(8px) brightness(80%)" }}
                ></div>
                <h4
                  className={
                    i18n.language === "en"
                      ? "z-[2] relative text-[20px] font-normal"
                      : "z-[2] relative text-[20px] font-normal direction"
                  }
                >
                  {t("EXPLORE OUR COUNTRY")}
                </h4>
                <div className="z-[2] relative w-[100px] h-[2px] bg-[#f8f1f14d] my-5 mx-auto"></div>
                <h2
                  className={
                    i18n.language === "en"
                      ? "z-[2] relative text-[50px] mb-[25px]"
                      : "z-[2] relative text-[50px] mb-[25px] direction"
                  }
                >
                  {t("Welcome To Iran")}
                </h2>
                <p
                  className={
                    i18n.language === "en"
                      ? "z-[2] relative px-[5%] text-[15px] leading-[30px] large:px-[15%]"
                      : "z-[2] relative px-[5%] text-[15px] leading-[30px] large:px-[15%] direction"
                  }
                >
                  {t(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  )}
                </p>
                <div className="z-[2] relative mt-[30px]">
                  <a
                    href="#"
                    className={
                      i18n.language === "en"
                        ? "bg-white text-teal-color text-center text-[14px] py-4 px-[30px] rounded-[25px] tracking-[0.5px] overflow-hidden inline-block no-underline"
                        : "bg-white text-teal-color text-center text-[14px] py-4 px-[30px] rounded-[25px] tracking-[0.5px] overflow-hidden inline-block no-underline direction"
                    }
                  >
                    {t("Discover More")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IranSectionBanner;
