import React, { useState } from "react";
import { bestOfferCity } from "../bestOfferData";
import BestWeeklyOffer from "../bestWeeklyOffer";

const DealBanner = () => {
  const [countryName, setCountryName] = useState("");
  const [priceOffer, setPriceOffer] = useState("");

  const countries = [
    { id: 1, label: "Iran", value: "iran" },
    { id: 2, label: "Italy", value: "italy" },
    { id: 3, label: "Spain", value: "spain" },
    { id: 4, label: "Turkey", value: "turkey" },
  ];

  const priceRange = [
    { id: 1, prices: "$100 - $250" },
    { id: 2, prices: "$250 - $400" },
    { id: 3, prices: "$400 - $500" },
    { id: 4, prices: "$500 - $650" },
    { id: 5, prices: "$650+" },
  ];

  const handleChange = (e) => {
    setCountryName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPriceOffer(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(countryName);
  };

  return (
    <>
      <section>
        <div className="bg-center bg-[url('https://i.postimg.cc/Njnw1Qd1/heading-bg.jpg')] bg-no-repeat bg-cover py-[190px] text-center">
          <div className="px-[10px]">
            <div className="px-[15px] mb-[30px]">
              <h4 className="text-[20px] text-white mb-5 font-medium capitalize">
                discover our weekly offers
              </h4>
              <h2 className="text-[50px] font-bold text-white mb-[30px] capitalize">
                amazing prices & more
              </h2>
            </div>
            <div>
              <a
                href="#"
                className="text-[14px] bg-transparent text-white no-underline inline-block py-3 px-[30px] border border-solid border-white rounded-[25px] capitalize font-medium overflow-hidden tracking-[0.5px]"
              >
                discover more
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="px-[10px] mx-auto">
          <div className="w-full">
            <form className="bg-teal-color rounded-bl-[23px] rounded-br-[23px] py-[35px] px-[60px]">
              <div>
                <div>
                  <h4 className="text-[20px] text-white font-bold my-[15px] capitalize ">
                    sort deals by:
                  </h4>
                </div>
                <div>
                  <fieldset className="border-none outline-none">
                    <select
                      value={countryName}
                      onChange={handleChange}
                      className="mb-[30px]  outline-none border-b border-solid border-white border-x-0 border-t-0 w-full bg-teal-color text-[15px] text-white  py-2 px-2"
                    >
                      <option selected>Destination :</option>
                      {countries.map((options) => (
                        <option key={options.id} value={options.value}>
                          {options.label}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border-none outline-none">
                    <select
                    value={priceOffer}
                      onChange={handlePriceChange}
                      className="mb-[30px]  outline-none border-b border-solid border-white border-x-0 border-t-0 w-full bg-teal-color text-[15px] text-white  py-2 px-2"
                    >
                      <option selected>Price Range :</option>
                      {priceRange.map((price) => (
                        <option key={price.id}>{price.prices}</option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border-none outline-none">
                    <button
                      onClick={handleClick}
                      className="w-full capitalize text-center text-[14px] text-white bg-transparent border border-solid border-white py-2 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] overflow-hidden cursor-pointer"
                    >
                      search results
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
        countryName={countryName}
        priceOffer={priceOffer}
      />
    </>
  );
};

export default DealBanner;
