import React from "react";
import { useTranslation } from "react-i18next";

//image
import discoverMore from "../../assets/discoverMoreImage/about-left-image.jpg";
//style
import "../../index.css";

const DiscoverMoreAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="mt-[120px] pb-[120px] border-b border-t-0 border-x-0 border-solid border-[#eee]">
        <div className="px-[10px] small:max-w-[540px] small:my-0 small:mx-auto medium:max-w-[720px] large:max-w-[960px] min-[1200px]:max-w-[1140px] xxLarge:max-w-[1320px]">
          <div className="large:flex large:flex-wrap">
            <div className="small:self-center large:w-1/2">
              <div className="mb-[60px]">
                <img src={discoverMore} alt="discover" className="w-full" />
              </div>
            </div>

            <div className="large:w-1/2">
              <div className="mb-10 ">
                <h2
                  className={
                    i18n.language === "en"
                      ? "text-[30px] leading-[36px] mb-[20px] font-bold text-[#2a2a2a]"
                      : "text-[30px] leading-[36px] mb-[20px] font-bold text-[#2a2a2a] direction"
                  }
                >
                  {t("Discover More About Our Country")}
                </h2>
                <p
                  className={
                    i18n.language === "en"
                      ? "text-[15px] leading-[30px] text-[#afafaf]"
                      : "text-[15px] leading-[30px] text-[#afafaf] direction"
                  }
                >
                  {t(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                  )}
                </p>
              </div>
              <div className="large:flex large:flex-wrap">
                <div className="large:w-1/2 large:px-[10px]">
                  <div
                    className={
                      i18n.language === "en"
                        ? "bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px]"
                        : "bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px] text-right"
                    }
                  >
                    <h4 className="text-[20px] text-[#2a2a2a] font-bold">
                      150.640 +
                    </h4>
                    <span className="text-teal-color text-[15px]">
                      {t("Total Guests Yearly")}
                    </span>
                  </div>
                </div>
                <div className="large:w-1/2 large:px-[10px]">
                  <div
                    className={
                      i18n.language === "en"
                        ? "bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px]"
                        : "bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px] text-right"
                    }
                  >
                    <h4 className="text-[20px] text-[#2a2a2a] font-bold">
                      175.000 +
                    </h4>
                    <span className="text-teal-color text-[15px]">
                      {t("Amazing Accomoditations")}
                    </span>
                  </div>
                </div>
                <div className="large:w-full">
                  <div
                    className={
                      i18n.language === "en"
                        ? "bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px]"
                        : "bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px] text-right"
                    }
                  >
                    <div>
                      <div>
                        <h4 className="text-[20px] text-[#2a2a2a] font-bold">
                          12.560 +
                        </h4>
                        <span className="text-[15px] text-teal-color">
                          {t("Amazing Places")}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-[20px] text-[#2a2a2a] font-bold">
                          240.580 +
                        </h4>
                        <span className="text-[15px] text-teal-color">
                          {t("Different Check-ins Yearly")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className={
                  i18n.language === "en"
                    ? "text-[15px] leading-[30px] text-[#afafaf]"
                    : "text-[15px] leading-[30px] text-[#afafaf] direction"
                }
              >
                {t(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed doeiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore."
                )}
              </p>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscoverMoreAbout;
