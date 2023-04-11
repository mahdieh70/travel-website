import React from "react";
import Header from "../header/index";
import CallToReservation from "../callToReservation/index";
import DealBanner from "./dealBanner";



const Deal = () => {
  return (
    <>
      <Header />
      <DealBanner  />
    
      <CallToReservation />
    </>
  );
};

export default Deal;
