import React from "react";
import Header from "./commponents/Headers/Header";
import LocationsList from "./commponents/LocationsList/LocationsList";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./commponents/AppLayout/AppLayout";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationsList />} />
        <Route path="/hotels" element={<AppLayout />}></Route>
        <Route index element={<div>Hotel</div>}></Route>
        <Route path=":id" element={<div>single hotel</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
