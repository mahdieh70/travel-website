import React from "react";
import SpainSectionBanner from "./spainSectionBanner";
import CitiesAndTownOfSpain from "./citiesAndTownOfSpain";
import WeeklyOffersSpain from "./weeklyOffersSpain";
import CallToReservation from "../callToReservation/index";
import Footer from "../footer";
import DiscoverMoreAbout from "../DiscoverMoreAbout";
import { citiesOfSpainData } from "../sliders/citiesAndTownSlider";
import { spainOffersSlider } from "../sliders/offerSliders/offersSlider";

const CitiesOfSpain = () => {
  return (
    <>
      <SpainSectionBanner />
      <CitiesAndTownOfSpain citiesOfSpainData={citiesOfSpainData} />
      <WeeklyOffersSpain spainOffersSlider={spainOffersSlider} />
      <DiscoverMoreAbout />
      <CallToReservation />
      <Footer />
    </>
  );
};

export default CitiesOfSpain;
