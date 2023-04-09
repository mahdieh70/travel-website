import React from "react";
import TurkeySectionBanner from "./turkeySectionBanner";
import WeeklyOffersTurkey from "./weeklyOffersTurkey";
import CitiesAndTownOfTurkey from "./citiesAndTownOfTurkey";
import CallToReservation from "../callToReservation/index";
import Footer from "../footer";
import DiscoverMoreAbout from "../DiscoverMoreAbout";
import { citiesOfTurkeyData } from "../sliders/citiesAndTownSlider";
import { TurkeyOffersSlider } from "../sliders/offerSliders/offersSlider";

const CitiesOfTurkey = () => {
  return (
    <>
      <TurkeySectionBanner />
      <CitiesAndTownOfTurkey citiesOfTurkeyData={citiesOfTurkeyData} />
      <WeeklyOffersTurkey TurkeyOffersSlider={TurkeyOffersSlider} />
      <DiscoverMoreAbout />
      <CallToReservation />
      <Footer />
    </>
  );
};

export default CitiesOfTurkey;
