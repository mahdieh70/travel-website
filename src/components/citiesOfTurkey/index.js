import React from "react";
import TurkeySectionBanner from "./turkeySectionBanner";
import WeeklyOffersTurkey from "./weeklyOffersTurkey";
import CitiesAndTownOfTurkey from "./citiesAndTownOfTurkey";
import CallToReservation from "../callToReservation/index";
import Footer from "../footer";
import DiscoverMoreAbout from "../DiscoverMoreAbout";

const CitiesOfTurkey = () => {
  return (
    <>
      <TurkeySectionBanner />
      <CitiesAndTownOfTurkey />
      <WeeklyOffersTurkey />
      <DiscoverMoreAbout />
      <CallToReservation />
      <Footer />
    </>
  );
};

export default CitiesOfTurkey;
