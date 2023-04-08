import React from "react";
import ReservationBanner from "./ReservationBanner";
import Contact from "./contact";
import ReservationForm from "./reservationForm";
import Footer from "../footer";

const Reservation = () => {
  return (
    <>
      <ReservationBanner />
      <Contact />
      <ReservationForm />
      <Footer />
    </>
  );
};

export default Reservation;
