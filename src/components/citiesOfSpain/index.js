import React from "react";
import SpainSectionBanner from "./spainSectionBanner";
import CitiesAndTownOfSpain from "./citiesAndTownOfSpain";
import WeeklyOffersSpain from "./weeklyOffersSpain";
import CallToReservation from "../callToReservation/index";
import Footer from "../footer";
import DiscoverMoreAbout from "../DiscoverMoreAbout";
import { citiesOfSpainData } from "../sliders/citiesAndTownSlider";

const CitiesOfSpain = () => {
  return (
    <>
      <SpainSectionBanner />
      <CitiesAndTownOfSpain citiesOfSpainData={citiesOfSpainData} />
      <WeeklyOffersSpain />
      <DiscoverMoreAbout />
      <CallToReservation />
      <Footer />
    </>
  );
};

export default CitiesOfSpain;
