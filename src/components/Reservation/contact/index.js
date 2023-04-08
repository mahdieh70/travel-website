import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mt-[-99px] mx-auto small:max-w-[540px] ">
        <div className="w-full px-[10px] mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full max-w-full mb-[30px] rounded-[23px] small:w-1/2 px-[15px]">
              <div className=" bg-[#f0f0f0]  text-center px-[30px] py-[30px] rounded-[23px]">
                <i className="fa-solid fa-phone bg-blue-300 w-[60px] h-[60px] inline-block text-center leading-[60px] rounded-full text-teal-color text-[20px] mb-5"></i>
                <h4 className="text-[21px] font-bold mb-[10px] text-[#2a2a2a] capitalize">
                  make a phone call
                </h4>
                <a
                  href="#"
                  className="text-[15px] text-teal-color no-underline"
                >
                  +123 456 789 (0)
                </a>
              </div>
            </div>
            <div className="w-full max-w-full mb-[30px]  rounded-[23px] small:w-1/2 px-[15px] ">
              <div className=" bg-[#f0f0f0]  text-center px-[30px] py-[30px] rounded-[23px]">
                <i className="fa-solid fa-envelope bg-blue-300 w-[60px] h-[60px] inline-block text-center leading-[60px] rounded-full text-teal-color text-[20px] mb-5"></i>
                <h4 className="text-[21px] font-bold mb-[10px] text-[#2a2a2a] capitalize">
                  contact us via email
                </h4>
                <a
                  href="#"
                  className="text-[15px] text-teal-color no-underline"
                >
                  company@email.com
                </a>
              </div>
            </div>
            <div className="w-full max-w-full mb-[30px]  rounded-[23px] small:w-1/2 px-[15px] ">
              <div className=" bg-[#f0f0f0]  text-center px-[30px] py-[30px] rounded-[23px]">
                <i className="fa-solid fa-location-pin bg-blue-300 w-[60px] h-[60px] inline-block text-center leading-[60px] rounded-full text-teal-color text-[20px] mb-5"></i>
                <h4 className="text-[21px] font-bold mb-[10px] text-[#2a2a2a] capitalize">
                 visit our offices
                </h4>
                <a
                  href="#"
                  className="text-[15px] text-teal-color no-underline"
                >
                 24th Street North Avenue London, UK
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;