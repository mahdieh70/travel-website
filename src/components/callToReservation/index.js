import React from "react";

const CallToReservation = () => {
  return (
    <>
      <section className="bg-callToReserveImage bg-center bg-cover bg-no-repeat h-[365px] py-[75px]">
        <div className="px-[10px]">
          <div className="text-center">
            <div>
              <h2 className="text-[40px] uppercase font-bold text-white mb-[10px]">Are You Looking To Travel ?</h2>
              <h4 className="text-[20px] text-white font-semibold">Make A Reservation By Clicking The Button</h4>
            </div>
            <div>
              <div className="mt-7">
                <a href="#" className="text-[14px] no-underline text-white border border-solid border-white rounded-[25px] inline-block py-3 px-[30px] ">Book Yours Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToReservation;
