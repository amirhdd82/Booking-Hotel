import React from "react";
import Header from "./commponents/Headers/Header";
import LocationsList from "./commponents/LocationsList/LocationsList";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationsList />} />
      </Routes>
      {/* <LocationsList /> */}
    </div>
  );
}

export default App;
