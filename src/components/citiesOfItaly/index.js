import React from "react";
import ItalySectionBanner from "./italySectionBanner";
import CitiesAndTownOfItaly from "./citiesAndTownOfItaly";
import WeeklyOffersItaly from "./weeklyOffersItaly";
import CallToReservation from "../callToReservation/index";
import Footer from "../footer/index";
import DiscoverMoreAbout from "../DiscoverMoreAbout";
import { citiesOfItalyData } from "../sliders/citiesAndTownSlider";
import { italyOffersSlider } from "../sliders/offerSliders/offersSlider";

const CitiesOfItaly = () => {
  return (
    <>
      <ItalySectionBanner />
      <CitiesAndTownOfItaly citiesOfItalyData={citiesOfItalyData} />
      <WeeklyOffersItaly italyOffersSlider={italyOffersSlider} />
      <DiscoverMoreAbout />
      <CallToReservation />
      <Footer />
    </>
  );
};

export default CitiesOfItaly;
