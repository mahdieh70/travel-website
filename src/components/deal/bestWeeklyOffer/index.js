import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

//style
import "../../../index.css";

const BestWeeklyOffer = ({ bestOfferCity, countryName, priceOffer }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const handleClick = () => navigate("/reservation");
  const filterdCity = bestOfferCity.filter(({ country }) => {
    return countryName === country;
  });

  const filterPrice = filterdCity.filter(({ price }) => {
    return priceOffer >= price;
  });

  return (
    <section className="mt-[120px] px-6 w-full mx-auto xxLarge:px-0">
      <div className="small:max-w-[540px] mx-auto medium:max-w-[720px] large:max-w-[960px] min-[1200px]:max-w-[1140px] xxLarge:max-w-[1320px]">
        <div className="small:flex small:flex-wrap">
          <div className="mx-auto">
            <div className="mb-[80px] text-center">
              <h2 className="mb-5 leading-9 text-[30px] font-bold text-[#2a2a2a] capitalize">
                {t("best weekly offers in each city")}
              </h2>
              <p className="text-[16px] leading-[30px] text-[#afafaf]">
                {t(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                )}
              </p>
            </div>
          </div>
          {filterPrice.map((elem) => (
            <div className="w-full max-w-full small:w-1/2 small:px-[5px] medium:px-[10px] ">
              <div className="bg-[#f7f7f7] rounded-[23px] mb-[30px] ">
                <div className="large:flex">
                  <div className="w-full large:w-1/2 ">
                    <div>
                      <img
                        src={elem.image}
                        alt="imag"
                        className="rounded-t-[23px] overflow-hidden w-full align-middle h-[600px] small:h-[350px] large:rounded-bl-[23px] large:rounded-tr-[0px] xxLarge:h-[370px]"
                      />
                    </div>
                  </div>
                  <div className="large:w-1/2 large:self-center">
                    <div className="py-[30px] px-[30px] ">
                      <div
                        className={
                          i18n.language === "en"
                            ? "flex justify-between"
                            : "flex justify-between flex-row-reverse"
                        }
                      >
                        <h4 className="text-[20px] font-bold pb-[25px] mb-[10px] ">
                          {t(`${elem.location}`)}
                        </h4>
                        <h4 className="text-teal-color">${elem.price}</h4>
                      </div>

                      <div
                        className={
                          i18n.language === "en"
                            ? "flex border-y border-solid border-[#ddd] border-x-0 py-[10px] px-0 flex-row "
                            : "flex border-y border-solid border-[#ddd] border-x-0 py-[10px] px-0 flex-row-reverse "
                        }
                      >
                        <div
                          className={
                            i18n.language === "en"
                              ? "w-1/2 pr-[10px]"
                              : "w-1/2 pr-[10px] direction text-right "
                          }
                        >
                          <i className="fa-solid fa-clock text-[#777]"></i>
                          <span
                            className={
                              i18n.language === "en"
                                ? "ml-[10px] text-[15px] text-[#afafaf] capitalize"
                                : "mr-[10px] text-[15px] text-[#afafaf] capitalize"
                            }
                          >
                            {t("5 days")}
                          </span>
                        </div>
                        <div
                          className={
                            i18n.language === "en"
                              ? "w-1/2 pr-[10px]"
                              : "w-1/2 pr-[10px] direction text-center "
                          }
                        >
                          <i className="fa-solid fa-map text-[#777]"></i>
                          <span
                            className={
                              i18n.language === "en"
                                ? "ml-[10px] text-[15px] text-[#afafaf] capitalize"
                                : "mr-[10px] text-[15px] text-[#afafaf] capitalize"
                            }
                          >
                            {t("daily places")}
                          </span>
                        </div>
                      </div>
                      <p
                        className={
                          i18n.language === "en"
                            ? "pt-[25px] mt-[10px] mb-[30px] text-[15px] leading-[30px] text-[#afafaf]"
                            : "pt-[25px] mt-[10px] mb-[30px] text-[15px] leading-[30px] text-[#afafaf] direction"
                        }
                      >
                        {t(
                          "Lorem ipsum dolor sit amet dire consectetur adipiscing elit."
                        )}
                      </p>
                      <div
                        className={
                          i18n.language === "en" ? "text-left" : "text-right"
                        }
                      >
                        <Link
                          onClick={handleClick}
                          to="/reservation"
                          className={
                            i18n.language === "en"
                              ? "text-center text-[14px] no-underline capitalize bg-teal-color text-white py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] overflow-hidden"
                              : "text-center text-[14px] no-underline capitalize bg-teal-color text-white py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] overflow-hidden direction"
                          }
                        >
                          {t("Make A Reservation")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestWeeklyOffer;
