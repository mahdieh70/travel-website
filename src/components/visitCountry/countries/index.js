import React from "react";

const Countries = ({
  image,
  country,
  contenient,
  population,
  territory,
  averagePrice,
}) => {
  return (
    <>
      <div className="mb-[30px] small:flex xLarge:w-[48%] ">
        <div className="small:flex ">
          <div className=" w-full overflow-hidden">
            <img
              src={image}
              alt="iran"
              className="w-full h-full rounded-[23px] aspect-square small:w-[200px] small:h-[200px] medium:w-[280px] medium:h-[280px] xLarge:w-[220px] xLarge:h-[220px]"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col small:ml-5">
            <div className="flex justify-between items-center mt-5">
              <div>
                <h4 className="text-[20px] mb-[5px]">{country}</h4>
                <span className="text-[#afafaf] text-4">{contenient}</span>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[14px] py-[14px] px-[15px] text-white bg-teal-color inline-block rounded-[25px] no-underline tracking-[1px] font-bold"
                >
                  Explore More
                </a>
              </div>
            </div>
            <p className="text-[#afafaf] my-[18px] leading-7 small:text-[16px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod.
            </p>
            <ul className="flex list-none border-y border-x-0 border-solid border-[#eee] py-[15px] small:py-5 medium:py-3">
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center">
                <i className="fa-solid fa-user mr-[5px] text-[16px]"></i>
                {population} Mil People
              </li>
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center ">
                <i className="fa-solid fa-globe mr-[5px] text-[16px]"></i>
                {territory} Km2
              </li>
              <li className="w-[33.33%] text-[#afafaf] text-[14px] text-center ">
                <i className="fa-solid fa-house mr-[5px] text-[16px]"></i>$
                {averagePrice}
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
