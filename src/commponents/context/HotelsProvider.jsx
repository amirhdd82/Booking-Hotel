import React, { createContext, useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const HotelContext = createContext();
const BASE_URL = "http://localhost:5000/hotels";

function HotelsProvider({ children }) {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination") || "";
  const room = JSON.parse(searchParams.get("options") || "{}")?.room || 1;
  const [currentHotel, setCurrentHotel] = useState(null);
  const [isLoadingCurrentHotel, setIsLoadingCurrentHotel] = useState(false);

  const { isLoading, data: hotels } = useFetch(
    BASE_URL,
    `host_location-Like=${destination}&name_like=${destination}&accommodates_gte=${room}`
  );

  async function getHotel(id) {
    setIsLoadingCurrentHotel(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentHotel(data);
      setIsLoadingCurrentHotel(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingCurrentHotel(false);
    }
  }

  return (
    <HotelContext.Provider
      value={{
        isLoading,
        hotels,
        getHotel,
        isLoadingCurrentHotel,
        currentHotel,
      }}
    >
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
