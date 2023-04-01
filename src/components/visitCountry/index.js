import React from "react";
import Countries from "./countries";
import { countriesData } from "./countries-data";

const VisitCountry = () => {
  return (
    <>
      <section className="mt-[120px]">
        <div className="mx-3">
          <div className="mb-20">
            <h2 className="mb-5 text-[32px] font-bold text-[#2a2a2a]">
              Visit One Of Our Countries Now
            </h2>
            <p className="opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div>
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
