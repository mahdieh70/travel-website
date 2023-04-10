import React from "react";
import IranSectionBanner from "../citiesOfIran/iranSectionBanner/index";
import CitiesAndTownOfIran from "../citiesOfIran/citiesAndTownOfIran/index";
import WeeklyOffersIran from "./weeklyOffersIran";
import CallToReservation from "../callToReservation/index";
import Footer from "../footer/index";
import DiscoverMoreAbout from "../DiscoverMoreAbout";
import { citiesOfIranData } from "../sliders/citiesAndTownSlider";
import { iranOffersSlider } from "../sliders/offerSliders/offersSlider";

const CitiesOfIran = () => {
  return (
    <>
      <IranSectionBanner />
      <CitiesAndTownOfIran citiesOfIranData={citiesOfIranData} />
      <WeeklyOffersIran iranOffersSlider={iranOffersSlider} />
      <DiscoverMoreAbout />
      <CallToReservation />
      <Footer />
    </>
  );
};

export default CitiesOfIran;
