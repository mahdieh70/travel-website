import React from "react";
import discoverMore from "../../assets/discoverMoreImage/about-left-image.jpg";

const DiscoverMoreAbout = () => {
  return (
    <>
      <section className="mt-[120px] pb-[120px] border-b border-t-0 border-x-0 border-solid border-[#eee]">
        <div className="px-[10px]">
          <div>
            <div>
              <div className="mb-[60px]">
                <img src={discoverMore} alt="discover" className="w-full" />
              </div>
            </div>

            <div>
              <div className="mb-10 ">
                <h2 className="text-[30px] leading-[36px] mb-[20px] font-bold text-[#2a2a2a]">
                  Discover More About Our Country
                </h2>
                <p className="text-[15px] leading-[30px] text-[#afafaf]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div>
                <div>
                  <div className="bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px]">
                    <h4 className="text-[20px] text-[#2a2a2a] font-bold">
                      150.640 +
                    </h4>
                    <span className="text-teal-color text-[15px]">
                      Total Guests Yearly
                    </span>
                  </div>
                </div>
                <div>
                  <div className="bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px]">
                    <h4 className="text-[20px] text-[#2a2a2a] font-bold">
                      175.000 +
                    </h4>
                    <span className="text-teal-color text-[15px]">
                      Amazing Accomoditations
                    </span>
                  </div>
                </div>
                <div>
                  <div className="bg-[#f7f7f7] rounded-[10px] py-[30px] px-[30px] mb-[30px]">
                    <div>
                      <div>
                        <h4 className="text-[20px] text-[#2a2a2a] font-bold">
                          12.560 +
                        </h4>
                        <span className="text-[15px] text-teal-color">
                          Amazing Places
                        </span>
                      </div>
                      <div>
                        <h4 className="text-[20px] text-[#2a2a2a] font-bold">
                          240.580 +
                        </h4>
                        <span className="text-[15px] text-teal-color">
                          Different Check-ins Yearly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[15px] leading-[30px] text-[#afafaf]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore.
              </p>
              <div className="mt-[30px]">
                <a href="#" className="text-center text-[15px] text-white bg-teal-color py-4 px-[30px] inline-block rounded-[25px] tracking-[0.5px] overflow-hidden no-underline">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscoverMoreAbout;
