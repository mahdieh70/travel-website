import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="mt-[-99px] mx-auto small:max-w-[540px] medium:max-w-[720px] large:max-w-[960px] large:flex large:flex-nowrap xLarge:max-w-[1040px] min-[1200px]:max-w-[1140px] min-[1200px]:flex min-[1200px]:flex-nowrap xxLarge:max-w-[1320px] ">
        <div className="w-full px-[10px] mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full max-w-full mb-[30px] rounded-[23px] small:w-1/2 px-[15px] xLarge:w-[33.33%]">
              <div className=" bg-[#f0f0f0]  text-center px-[30px] py-[30px] rounded-[23px]">
                <i className="fa-solid fa-phone bg-blue-300 w-[60px] h-[60px] inline-block text-center leading-[60px] rounded-full text-teal-color text-[20px] mb-5"></i>
                <h4 className="text-[21px] font-bold mb-[10px] text-[#2a2a2a] capitalize">
                  {t('make a phone call')}
                </h4>
                <a
                  href="#"
                  className="text-[15px] text-teal-color no-underline"
                >
                  +123 456 789 (0)
                </a>
              </div>
            </div>
            <div className="w-full max-w-full mb-[30px]  rounded-[23px] small:w-1/2 px-[15px] xLarge:w-[33.33%] ">
              <div className=" bg-[#f0f0f0]  text-center px-[30px] py-[30px] rounded-[23px]">
                <i className="fa-solid fa-envelope bg-blue-300 w-[60px] h-[60px] inline-block text-center leading-[60px] rounded-full text-teal-color text-[20px] mb-5"></i>
                <h4 className="text-[21px] font-bold mb-[10px] text-[#2a2a2a] capitalize">
                  {t('contact us via email')}
                </h4>
                <a
                  href="#"
                  className="text-[15px] text-teal-color no-underline"
                >
                  company@email.com
                </a>
              </div>
            </div>
            <div className="w-full max-w-full mb-[30px]  rounded-[23px] small:w-1/2 px-[15px] xLarge:w-[33.33%] ">
              <div className=" bg-[#f0f0f0]  text-center px-[30px] py-[30px] rounded-[23px]">
                <i className="fa-solid fa-location-pin bg-blue-300 w-[60px] h-[60px] inline-block text-center leading-[60px] rounded-full text-teal-color text-[20px] mb-5"></i>
                <h4 className="text-[21px] font-bold mb-[10px] text-[#2a2a2a] capitalize">
                 {t('visit our offices')}
                </h4>
                <a
                  href="#"
                  className="text-[15px] text-teal-color no-underline"
                >
                 {t('24th Street North Avenue London, UK')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
