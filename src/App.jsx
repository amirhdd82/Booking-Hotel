import React from "react";
import Header from "./commponents/Headers/Header";
import LocationsList from "./commponents/LocationsList/LocationsList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <LocationsList />
    </div>
  );
}

export default App;
