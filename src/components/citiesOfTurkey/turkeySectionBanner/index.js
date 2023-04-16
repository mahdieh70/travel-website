import React from "react";
import { useTranslation } from "react-i18next";

//style
import "../../../index.css";

const TurkeySectionBanner = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="mt-[70px] large:mt-[70px]">
        <div className="bg-center bg-[url('https://i.postimg.cc/ZqqfMz4Q/topkapi-palace.jpg')] bg-no-repeat bg-cover bg-fixed py-[130px] w-full ">
          <div className="mx-3">
            <div>
              <div className="text-white rounded-[23px] text-center py-30 px-15 relative overflow-hidden z-[2] py-[120px] px-[60px]">
                <div
                  className="w-full h-full bg-center bg-[url('https://i.postimg.cc/ZqqfMz4Q/topkapi-palace.jpg')] bg-no-repeat bg-fixed bg-cover absolute left-0 top-0 z-[1]"
                  style={{ filter: "blur(8px) brightness(80%)" }}
                ></div>

                <h2
                  className={
                    i18n.language === "en"
                      ? "z-[2] relative text-[50px] mb-[25px]"
                      : "z-[2] relative text-[50px] mb-[25px] direction"
                  }
                >
                  {t("Welcome To Turkey")}
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
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TurkeySectionBanner;
