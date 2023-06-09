import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Landing from "./components/landing";
import Header from "./components/header";
import CitiesOfIran from "./components/citiesOfIran";
import CitiesOfItaly from "./components/citiesOfItaly";
import CitiesOfSpain from "./components/citiesOfSpain";
import CitiesOfTurkey from "./components/citiesOfTurkey";
import Reservation from "./components/Reservation";
import Deal from "./components/deal/index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="iran" element={<CitiesOfIran />} />
        <Route path="italy" element={<CitiesOfItaly />} />
        <Route path="spain" element={<CitiesOfSpain />} />
        <Route path="turkey" element={<CitiesOfTurkey />} />
        <Route path="deal" element={<Deal />} />
      </Routes>
    </>
  );
};

export default App;
