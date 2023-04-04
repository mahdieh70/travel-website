import React from "react";

const AboutSectionBanner = () => {
  return (
    <>
      <section className="mt-[100px] large:mt-[70px]">
        <div className="bg-center bg-[url('https://i.postimg.cc/DfHBbVg8/banner.jpg')] bg-no-repeat bg-cover bg-fixed py-[130px] w-full ">
          <div className="mx-3">
            <div>
              <div className="text-white rounded-[23px] text-center py-30 px-15 relative overflow-hidden z-[2] py-[120px] px-[60px]">
                <div
                  className="w-full h-full bg-center bg-[url('https://i.postimg.cc/DfHBbVg8/banner.jpg')] bg-no-repeat bg-fixed bg-cover absolute left-0 top-0 z-[1]"
                  style={{ filter: "blur(8px) brightness(80%)" }}
                ></div>
                <h4 className="z-[2] relative text-[20px] font-normal">
                  EXPLORE OUR COUNTRY
                </h4>
                <div className="z-[2] relative w-[100px] h-[2px] bg-[#f8f1f14d] my-5 mx-auto"></div>
                <h2 className="z-[2] relative text-[50px] mb-[25px]">
                  Welcome To Iran
                </h2>
                <p className="z-[2] relative px-[5%] text-[15px] leading-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt uttersi labore et dolore magna
                  aliqua is ipsum suspendisse ultrices gravida
                </p>
                <div className="z-[2] relative mt-[30px]">
                  <a
                    href="#"
                    className="bg-white text-teal-color text-center text-[14px] py-4 px-[30px] rounded-[25px] overflow-hidden inline-block no-underline"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionBanner;
