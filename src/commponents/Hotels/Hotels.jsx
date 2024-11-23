import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;
  useFetch(
    "http://localhost:5000/hotels",
    `name_link=${destination || ""}&accommodates_gte=${room || 1}`
  );
  return <div>Hotels</div>;
}

export default Hotels;
