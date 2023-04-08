import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReservationForm = () => {
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
        <div className="px-[10px] ">
          <div className="w-full max-w-full ">
            <form
              onSubmit={formik.handleSubmit}
              className="py-[45px] px-[30px] bg-[#f9f9f9] rounded-b-3xl"
            >
              <div>
                <div>
                  <h4 className="text-[30px] text-center mb-[50px] text-[#2a2a2a] font-bold">
                    Make Your <em className=" text-teal-color">Reservation</em>{" "}
                    Through This <em className=" text-teal-color">Form</em>
                  </h4>
                </div>
                <div>
                  <fieldset className="border-0 outline-0 mb-[20px]">
                    <label
                      htmlFor="fullName"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize"
                    >
                      your name
                    </label>
                    <input
                      className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mb-2 "
                      name="fullName"
                      type="text"
                      {...formik.getFieldProps("fullName")}
                    />
                    {formik.errors.fullName ? (
                      <div className="text-rose-700 text-[14px]">
                        {formik.errors.fullName}
                      </div>
                    ) : null}
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border-0 outline-0 mb-[20px]">
                    <label
                      htmlFor="phone"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize"
                    >
                      your phone number
                    </label>
                    <input
                      className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mt-2"
                      name="phone"
                      type="number"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.errors.phone ? (
                      <div className="text-rose-700 text-[14px]">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border-0 outline-0">
                    <label
                      htmlFor="guests"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize"
                    >
                      number of guests
                    </label>
                    <select className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mb-[30px] block text-[1rem] leading-[1.5] text-[#212529]">
                      <option selected>3 or 4 0r 5</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border-0 outline-0 mb-[20px]">
                    <label
                      htmlFor="date"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize"
                    >
                      check in date
                    </label>
                    <input
                      className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mt-2"
                      name="date"
                      type="date"
                      {...formik.getFieldProps("date")}
                    />
                    {formik.errors.date ? (
                      <div className="text-rose-700 text-[14px]">
                        {formik.errors.date}
                      </div>
                    ) : null}
                  </fieldset>
                </div>
                <div>
                  {" "}
                  <fieldset className="border-0 outline-0">
                    <label
                      htmlFor="destination"
                      className="text-[15px] text-[#afafaf] inline-block mb-2 capitalize"
                    >
                      choose your destination
                    </label>
                    <select className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] px-5 cursor-pointer mb-[30px] block text-[1rem] leading-[1.5] text-[#212529]">
                      <option selected>Iran, Mazandaran</option>
                      <option>Iran, Shiraz</option>
                      <option>Iran, Isfahan</option>
                      <option>Iran, Yazd</option>
                      <option>Iran, Hormozgan</option>
                      <option>Italy, Florence</option>
                      <option>Italy, Venice</option>
                      <option>Italy, Rome</option>
                      <option>Spain, Barselona</option>
                      <option>Spain, Madrid</option>
                      <option>Spain, Valencia</option>
                      <option>Turkey, Ankara</option>
                      <option>Turkey, Istanbul</option>
                      <option>Turkey, Buyukada</option>
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border-0">
                    <button
                      type="submit"
                      className="text-[14px] text-white bg-teal-color py-3 px-[30px] w-full text-center inline-block rounded-[25px] capitalize tracking-[0.5px] overflow-hidden border-0 outline-none"
                    >
                      make your reservation now
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
