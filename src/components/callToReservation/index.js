import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const CallToReservation = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/reservation");
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="bg-callToReserveImage bg-center bg-cover bg-no-repeat py-[75px]">
        <div className="px-[10px]">
          <div className="text-center">
            <div>
              <h2
                className={
                  i18n.language === "en"
                    ? "text-[36px] uppercase font-bold text-white mb-[10px]"
                    : "text-[36px] uppercase font-bold text-white mb-[10px] direction"
                }
              >
                {t("Are You Looking To Travel")} ?
              </h2>
              <h4
                className={
                  i18n.language === "en"
                    ? "text-[20px] text-white font-semibold"
                    : "text-[20px] text-white font-semibold direction"
                }
              >
                {t("Make A Reservation By Clicking The Button")}
              </h4>
            </div>
            <div>
              <div className="mt-7">
                <Link
                  to="/reservation"
                  onClick={handleClick}
                  className={
                    i18n.language === "en"
                      ? "text-[14px] no-underline text-white border border-solid border-white rounded-[25px] inline-block py-3 px-[30px]"
                      : "text-[14px] no-underline text-white border border-solid border-white rounded-[25px] inline-block py-3 px-[30px] direction"
                  }
                >
                  {t("Book Yours Now")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToReservation;
