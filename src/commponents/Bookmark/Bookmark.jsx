import React from "react";
import Map from "../Map/Map";

function Bookmark() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        {/* <Outlet /> */}
        <div>Bookmark List</div>
      </div>
      <Map />
    </div>
  );
}

export default Bookmark;
