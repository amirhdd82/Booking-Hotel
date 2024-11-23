import React, { createContext, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const HotelContext = createContext();

function HotelsProvider({ children }) {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination") || "";
  const room = JSON.parse(searchParams.get("options") || "{}")?.room || 1;

  const { isLoading, data: hotels } = useFetch(
    "http://localhost:5000/hotels",
    `host_location-Like=${destination}&name_like=${destination}&accommodates_gte=${room}`
  );

  return (
    <HotelContext.Provider value={{ isLoading, hotels }}>
      {children}
    </HotelContext.Provider>
  );
}

export function useHotels() {
  const context = useContext(HotelContext);

  if (!context) {
    throw new Error("useHotels must be used within a HotelsProvider");
  }

  return context;
}

export default HotelsProvider;
