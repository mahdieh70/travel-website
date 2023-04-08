import React from "react";
import IranSectionBanner from "../citiesOfIran/iranSectionBanner/index";
import CitiesAndTownOfIran from "../citiesOfIran/citiesAndTownOfIran/index";
import WeeklyOffersIran from "./weeklyOffersIran";
import CallToReservation from "../callToReservation/index";
import Footer from "../footer/index";
import DiscoverMoreAbout from "../DiscoverMoreAbout";
import { citiesOfIranData } from "../sliders/citiesAndTownSlider";

const CitiesOfIran = () => {
  return (
    <>
      <IranSectionBanner />
      <CitiesAndTownOfIran citiesOfIranData={citiesOfIranData} />
      <WeeklyOffersIran />
      <DiscoverMoreAbout/>
      <CallToReservation />
      <Footer />
    </>
  );
};

export default CitiesOfIran;
