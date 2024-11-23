import React from "react";
import Headers from "./commponents/Headers/Headers";
import LocationsList from "./commponents/LocationsList/LocationsList";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./commponents/AppLayout/AppLayout";
import Hotels from "./commponents/Hotels/Hotels";
import HotelsProvider from "./commponents/context/HotelsProvider";

function App() {
  return (
    <HotelsProvider>
      <Toaster />
      <Headers />
      <Routes>
        <Route path="/" element={<LocationsList />} />
        <Route path="/hotels" element={<AppLayout />}>
          <Route index element={<Hotels />} />
          <Route path=":id" element={<div>single hotel</div>} />
        </Route>
      </Routes>
    </HotelsProvider>
  );
}

export default App;
