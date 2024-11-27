import React from "react";
import Headers from "./commponents/Headers/Headers";
import LocationsList from "./commponents/LocationsList/LocationsList";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./commponents/AppLayout/AppLayout";
import Hotels from "./commponents/Hotels/Hotels";
import HotelsProvider from "./commponents/context/HotelsProvider";
import SingleHotel from "./commponents/SingleHotel/SingleHotel";
import Bookmark from "./commponents/Bookmark/Bookmark";

function App() {
  return (
    <HotelsProvider>
      <Toaster />
      <Headers />
      <Routes>
        <Route path="/" element={<LocationsList />} />
        <Route path="/hotels" element={<AppLayout />}>
          <Route index element={<Hotels />} />
          <Route path=":id" element={<SingleHotel />} />
        </Route>
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </HotelsProvider>
  );
}

export default App;
