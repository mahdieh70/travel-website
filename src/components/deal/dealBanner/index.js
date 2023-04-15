import React, { useState} from "react";
import { bestOfferCity } from "../bestOfferData";
import BestWeeklyOffer from "../bestWeeklyOffer";
import { useTranslation } from "react-i18next";

const DealBanner = () => {
  const [countryName, setCountryName] = useState("");
  const [priceOffer, setPriceOffer] = useState("");
  const { t, i18n } = useTranslation();
  const [submitForm, setSubmitForm] = useState({
    country: null,
    price: null,
  });

  const countries = [
    { id: 1, label: "Iran", value: "iran" },
    { id: 2, label: "Italy", value: "italy" },
    { id: 3, label: "Spain", value: "spain" },
    { id: 4, label: "Turkey", value: "turkey" },
  ];

  const priceRange = [
    { id: 1, totalPrice: "200" },
    { id: 2, totalPrice: "250" },
    { id: 3, totalPrice: "300" },
    { id: 4, totalPrice: "350" },
    { id: 5, totalPrice: "400" },
    { id: 6, totalPrice: "450" },
    { id: 7, totalPrice: "500" },
  ];

  const handleChange = (e) => {
    setCountryName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPriceOffer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm({
      country: e.target.country.value,
      price: e.target.price.value,
    });
  };

 

  return (
    <>
      <section>
        <div className="bg-center bg-[url('https://i.postimg.cc/Njnw1Qd1/heading-bg.jpg')] bg-no-repeat bg-cover py-[190px] text-center">
          <div className="px-[10px]">
            <div className="px-[15px] mb-[30px]">
              <h4 className="text-[20px] text-white mb-5 font-medium capitalize">
                {t('Discover Our Weekly Offers')}
              </h4>
              <h2 className="text-[50px] font-bold text-white mb-[30px] capitalize">
                {t('amazing prices & more')}
              </h2>
            </div>
            <div>
              <a
                href="#"
                className="text-[14px] bg-transparent text-white no-underline inline-block py-3 px-[30px] border border-solid border-white rounded-[25px] capitalize font-medium overflow-hidden tracking-[0.5px]"
              >
                {t('Discover More')}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="small:max-w-[540px] small:mx-auto medium:max-w-[720px] large:max-w-[960px] min-[1200px]:max-w-[1140px] xxLarge:max-w-[1320px]">
        <div className="px-[10px] mx-auto">
          <div className="w-full">
            <form
              id="submitForm"
              onSubmit={handleSubmit}
              className="bg-teal-color rounded-bl-[23px] rounded-br-[23px] py-[35px] px-[60px]"
            >
              <div className="large:flex justify-between items-center">
                <div className="large:w-[22%]">
                  <h4 className="text-[20px] text-white font-bold my-[15px] capitalize  ">
                    {t('sort deals by')}:
                  </h4>
                </div>
                <div className="large:w-[22%]">
                  <fieldset className="border-none outline-none ">
                    <select
                      name="country"
                      value={countryName}
                      onChange={handleChange}
                      className="mb-[30px]  outline-none border-b border-solid border-white border-x-0 border-t-0 w-full bg-teal-color text-[15px] text-white  py-2 px-2"
                    >
                      <option selected>{t('Destination')}: </option>
                      {countries.map((options) => (
                        <option key={options.id} value={options.value}>
                          {t(`${options.label}`)}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="large:w-[22%]">
                  <fieldset className="border-none outline-none ">
                    <select
                      name="price"
                      value={priceOffer}
                      onChange={handlePriceChange}
                      className="mb-[30px]  outline-none border-b border-solid border-white border-x-0 border-t-0 w-full bg-teal-color text-[15px] text-white  py-2 px-2"
                    >
                      <option selected>{t('Price Range')} :</option>
                      {priceRange.map((price) => (
                        <option value={price.totalPrice} key={price.id}>
                          ${price.totalPrice}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="large:w-[22%]">
                  <fieldset className="border-none outline-none ">
                    <button
                      form="submitForm"
                      type="submit"
                      className="w-full capitalize text-center text-[14px] text-white bg-transparent border border-solid border-white py-2 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] overflow-hidden cursor-pointer"
                    >
                      {t('search results')}
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BestWeeklyOffer
        bestOfferCity={bestOfferCity}
        countryName={submitForm.country}
        priceOffer={submitForm.price}
      />
    </>
  );
};

export default DealBanner;
