import React, { useState } from "react";
import { bestOfferCity } from "../bestOfferData";
import image from "../../../assets/photosOfIran/mazandaran/badab-suret-sari.jpg"

const DealBanner = () => {
  const [countryName, setCountryName] = useState("iran");

  const countries = [
    { label: "Iran", value: "iran" },
    { label: "Italy", value: "italy" },
    { label: "Spain", value: "spain" },
    { label: "Turkey", value: "turkey" },
  ];

  const priceRange = [
    "$100 - $250",
    "$250 - $400",
    "$400 - $500",
    "$500 - $650",
    "$650+",
  ];

  const handleChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
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
                      {countries.map((options) => (
                        <option value={options.value}>{options.label}</option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border-none outline-none">
                    <select className="mb-[30px]  outline-none border-b border-solid border-white border-x-0 border-t-0 w-full bg-teal-color text-[15px] text-white  py-2 px-2">
                      {priceRange.map((price) => (
                        <option>{price}</option>
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
      <section className="mt-[120px] px-6 w-full mx-auto">
        <div>
          <div>
            <div>
              <div className="mb-[80px] text-center">
                <h2 className="mb-5 leading-9 text-[30px] font-bold text-[#2a2a2a]">
                  Best Weekly Offers In Each City
                </h2>
                <p className="text-[16px] leading-[30px] text-[#afafaf]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="w-full max-w-full ">
              <div className="bg-[#f7f7f7] rounded-[23px] mb-[30px] ">
                <div>
                  <div className="w-full ">
                    <div>
                      <img
                        src={image}
                        alt="imag"
                        className="rounded-t-[23px] overflow-hidden w-full align-middle h-[600px]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="py-[30px] px-[30px]">
                      <h4 className="text-[20px] font-bold pb-[25px] mb-[10px] border-b border-solid border-[#ddd] border-x-0 border-t-0">
                        city lorem
                      </h4>
                      <div className="flex">
                        <div className="w-1/2 pr-[10px]">
                          <i className="fa-solid fa-clock text-[#777]"></i>
                          <span className="ml-[10px] text-[15px] text-[#afafaf] capitalize">
                            5 days
                          </span>
                        </div>
                        <div className="w-1/2 px-[10px]">
                          <i className="fa-solid fa-map text-[#777]"></i>
                          <span className="ml-[10px] text-[15px] text-[#afafaf] capitalize">
                            daily places
                          </span>
                        </div>
                      </div>
                      <p className="pt-[25px] mt-[10px] mb-[30px] border-t border-x-0 border-b-0 border-solid border-[#ddd] text-[15px] leading-[30px] text-[#afafaf]">
                        Lorem ipsum dolor sit amet dire consectetur adipiscing
                        elit.
                      </p>
                      <div>
                        <a
                          href="#"
                          className="text-center text-[14px] no-underline capitalize bg-teal-color text-white py-3 px-[30px] inline-block rounded-[25px] font-medium tracking-[0.5px] overflow-hidden"
                        >
                          make a reservation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealBanner;
