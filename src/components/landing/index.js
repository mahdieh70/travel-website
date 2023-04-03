import React from "react";

//components
import Header from "../header";
import Banner from "../banner";
import VisitCountry from "../visitCountry";
import CallToReservation from "../callToReservation";
import Footer from "../footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Banner />
      <VisitCountry/>
      <CallToReservation/>
      <Footer/>
    </>
  );
};

export default Landing;
