import React from "react";

const BestWeeklyOffer = ({ bestOfferCity, countryName, priceOffer }) => {
  const filterdCity = bestOfferCity.filter(({ country }) => {
    return countryName === country;
  });

  const filterPrice = filterdCity.filter(({ price }) => {
    return priceOffer >= price;
  });

 

  return (
    <section className="mt-[120px] px-6 w-full mx-auto">
      <div className="small:max-w-[540px] mx-auto medium:max-w-[720px] large:max-w-[960px]">
        <div className="small:flex small:flex-wrap">
          <div className="mx-auto">
            <div className="mb-[80px] text-center">
              <h2 className="mb-5 leading-9 text-[30px] font-bold text-[#2a2a2a]">
                Best Weekly Offers In Each City
              </h2>
              <p className="text-[16px] leading-[30px] text-[#afafaf]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
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
                        className="rounded-t-[23px] overflow-hidden w-full align-middle h-[600px] small:h-[350px]"
                      />
                    </div>
                  </div>
                  <div className="large:w-1/2 large:self-center">
                    <div className="py-[30px] px-[30px] ">
                      <div className="flex justify-between">
                        <h4 className="text-[20px] font-bold pb-[25px] mb-[10px] ">
                          {elem.location}
                        </h4>
                        <h4 className="text-teal-color">${elem.price}</h4>
                      </div>

                      <div className="flex border-y border-solid border-[#ddd] border-x-0 py-[10px] px-0 ">
                        <div className="w-1/2 pr-[10px] ">
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
                      <p className="pt-[25px] mt-[10px] mb-[30px] text-[15px] leading-[30px] text-[#afafaf]">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestWeeklyOffer;
