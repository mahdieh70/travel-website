import React from "react";
import ItalySectionBanner from "./italySectionBanner";
import CitiesAndTownOfItaly from "./citiesAndTownOfItaly";
import WeeklyOffersItaly from "./weeklyOffersItaly";
import CallToReservation from "../callToReservation/index";
import Footer from "../footer/index";
import DiscoverMoreAbout from "../DiscoverMoreAbout";

const CitiesOfItaly = () => {
  return (
    <>
      <ItalySectionBanner />
      <CitiesAndTownOfItaly />
      <WeeklyOffersItaly />
      <DiscoverMoreAbout />
      <CallToReservation />
      <Footer />
    </>
  );
};

export default CitiesOfItaly;
