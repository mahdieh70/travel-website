import React from "react";

//components
import Countries from "./countries";
import { countriesData } from "./countries-data";

const VisitCountry = () => {
  return (
    <>
      <section className="mt-[70px]">
        <div className="mx-3 small:mx-6 medium:mx-9 xLarge:mx-12 ">
          <div className="mb-20 text-center ">
            <h2 className="mb-5 text-[32px] font-bold text-[#2a2a2a]">
              Visit One Of Our Countries Now
            </h2>
            <p className="opacity-50 leading-[26px] small:tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="xLarge:flex xLarge:flex-wrap xLarge:justify-between">
            {countriesData.map((countries) => (
              <Countries
                key={countries.id}
                image={countries.image}
                country={countries.country}
                contenient={countries.continent}
                population={countries.population}
                territory={countries.territory}
                averagePrice={countries.avgPrice}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisitCountry;
