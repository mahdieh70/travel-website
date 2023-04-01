import React from "react";


const Countries = ({image,country,contenient,population,territory,averagePrice}) => {
  return (
    <>
      <div className="mb-[30px] ">
        <div>
          <div className="h-[550px] w-full rounded-[23px] overflow-hidden">
            <img src={image} alt="iran" className="w-full h-full" />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center mt-5">
              <div>
                <h4 className="text-5 mb-[5px]">{country}</h4>
                <span className="text-[#afafaf] text-4">{contenient}</span>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[14px] py-[14px] px-[15px] text-white bg-teal-color inline-block rounded-[25px] no-underline tracking-[0.5px] font-bold"
                >
                  Explore More
                </a>
              </div>
            </div>
            <p className="text-[#afafaf] my-[18px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod.
            </p>
            <ul className="flex list-none border-y border-x-0 border-solid border-[#eee] py-[15px]">
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center">
                <i className="fa-solid fa-user mr-[5px] text-[16px]"></i>
               {population} Mil People
              </li>
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center">
                <i className="fa-solid fa-globe mr-[5px] text-[16px]"></i>
                {territory} Km2
              </li>
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center">
                <i className="fa-solid fa-house mr-[5px] text-[16px]"></i>
                ${averagePrice}
              </li>
            </ul>
            <div className="mt-5 mb-9">
              <a
                href="#"
                className="text-[14px] text-teal-color no-underline font-medium flex items-center"
              >
                Need Directions ?
                <i className="fa-solid fa-arrow-right ml-[5px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
