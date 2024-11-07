import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import "../App.css";
import { HiCalendar, HiSearch } from "react-icons/hi";

function Header() {
  const [destination, setDestination] = useState("");
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="where to go?"
            className="headerSearchInput "
            name="destination"
            id="destination"
          />
          
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown">2024/11/09</div>
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <div id="optionDropDown">1 adult . 2 children . 3room</div>
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
