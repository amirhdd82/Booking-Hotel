import React from "react";
import useFetch from "../../hooks/useFetch";

function LocationsList() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
  if (isLoading) return <p>isLoading...</p>;
  return (
    <div className="nearbyLocation">
      <h2>Nearby Locarions</h2>
      {data.map((item) => {
        return (
          <div className="locationItem" key={item.id}>
            <img src={item.picture_url.url} alt={item.name} />
            <div className="locationItemDesc">
              <p className="location">{item.smart_location}</p>
              <p className="name">{item.name}</p>
              <p className="price">
              € {item.price} ;
              <span>night</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LocationsList;
