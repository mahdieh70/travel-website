import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import "../../../index.css";

const ReservationForm = () => {
  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      guests: "",
      date: "",
      destination: "",
    },
    //form validation
    validationSchema: Yup.object({
      fullName: Yup.string().required("Name Required"),
      phone: Yup.string().required("Phone Required"),
      date: Yup.string().required("date Required"),
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });

  return (
    <>
      <section className="my-[120px]">
        <div className="px-[10px] small:max-w-[540px] small:my-0 small:mx-auto medium:max-w-[720px] large:max-w-[960px] min-[1200px]:max-w-[1140px] xxLarge:max-w-[1320px] ">
          <div className="w-full max-w-full ">
            <form
              onSubmit={formik.handleSubmit}
              className="py-[45px] px-[30px] bg-[#f9f9f9] rounded-b-3xl min-[1200px]:py-[60px] min-[1200px]:px-[120px]"
            >
              <div
                className={
                  i18n.language === "en"
                    ? "large:flex large:flex-wrap large:justify-between"
                    : "large:flex large:flex-wrap large:justify-between"
                }
              >
                <div className="large:w-full">
                  <h4 className="text-[30px] text-center mb-[50px] text-[#2a2a2a] font-bold capitalize">
                    {t("make your reservation through this form")}
                  </h4>
                </div>
                <div className="large:w-[49%]">
                  <fieldset className="border-0 outline-0 mb-[20px]">
                    <label
                      htmlFor="fullName"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize large:mb-0"
                    >
                      {t("your name")}
                    </label>
                    <input
                      className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mb-2 large:mt-2 "
                      name="fullName"
                      type="text"
                      {...formik.getFieldProps("fullName")}
                    />
                    {formik.errors.fullName ? (
                      <div className="text-rose-700 text-[14px]">
                        {t(`${formik.errors.fullName}`)}
                      </div>
                    ) : null}
                  </fieldset>
                </div>
                <div className="large:w-[49%]">
                  <fieldset className="border-0 outline-0 mb-[20px]">
                    <label
                      htmlFor="phone"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize large:mb-0"
                    >
                      {t("your phone number")}
                    </label>
                    <input
                      className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mt-2 large:mb-0 large:mt-2"
                      name="phone"
                      type="number"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.errors.phone ? (
                      <div className="text-rose-700 text-[14px]">
                        {t(`${formik.errors.phone}`)}
                      </div>
                    ) : null}
                  </fieldset>
                </div>
                <div className="large:w-[49%]">
                  <fieldset className="border-0 outline-0">
                    <label
                      htmlFor="guests"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize"
                    >
                      {t("number of guests")}
                    </label>
                    <select className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mb-[30px] block text-[1rem] leading-[1.5] text-[#212529] large:mt-2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </fieldset>
                </div>
                <div className="large:w-[49%]">
                  <fieldset className="border-0 outline-0 mb-[20px]">
                    <label
                      htmlFor="date"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize"
                    >
                      {t("check in date")}
                    </label>
                    <input
                      className="w-full h-[46px] text-[#aaa] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mt-2 small:text-[16px]"
                      name="date"
                      type="date"
                      {...formik.getFieldProps("date")}
                    />
                    {formik.errors.date ? (
                      <div className="text-rose-700 text-[14px]">
                        {t(`${formik.errors.date}`)}
                      </div>
                    ) : null}
                  </fieldset>
                </div>
                <div className="large:w-full">
                  {" "}
                  <fieldset className="border-0 outline-0">
                    <label
                      htmlFor="destination"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize"
                    >
                      {t("choose your destination")}
                    </label>
                    <select className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mb-[30px] block text-[1rem] leading-[1.5] text-[#212529] large:mt-2">
                      <option selected>{t("Iran, Mazandaran")}</option>
                      <option>{t("Iran, Shiraz")}</option>
                      <option>{t("Iran, Isfahan")}</option>
                      <option>{t("Iran, Yazd")}</option>
                      <option>{t("Iran, Hormozgan")}</option>
                      <option>{t("Italy, Florence")}</option>
                      <option>{t("Italy, Venice")}</option>
                      <option>{t("Italy, Rome")}</option>
                      <option>{t("Spain, Barselona")}</option>
                      <option>{t("Spain, Madrid")}</option>
                      <option>{t("Spain, Valencia")}</option>
                      <option>{t("Turkey, Ankara")}</option>
                      <option>{t("Turkey, Istanbul")}</option>
                      <option>{t("Turkey, Buyukada")}</option>
                    </select>
                  </fieldset>
                </div>
                <div className="large:w-full">
                  <fieldset className="border-0">
                    <button
                      type="submit"
                      className="text-[14px] text-white bg-teal-color py-3 px-[30px] w-full text-center inline-block rounded-[25px] capitalize tracking-[0.5px] overflow-hidden border-0 outline-none"
                    >
                      {t("make your reservation now")}
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationForm;
