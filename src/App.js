import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Landing from "./components/landing";
import Header from "./components/header";
import CitiesOfIran from "./components/citiesOfIran";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="iran" element={<CitiesOfIran />} />
      </Routes>
    </>
  );
};

export default App;
