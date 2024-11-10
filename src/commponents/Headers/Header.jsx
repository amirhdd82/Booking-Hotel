import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import "../../App.css";
import { HiCalendar, HiSearch } from "react-icons/hi";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
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
          <div id="optionDropDown" onClick={() => setOpenOptions(!openOptions)}>
            1 adult . 2 children . 3room
          </div>
          {openOptions && <GuestOptionList />}
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

function GuestOptionList() {
  return (
    <div className="guestOptions">
      <div className="guestOptionItem">
        <span className="optionText">Adult</span>
        <div className="optionCounter">
          <button className="optionCounterBtn">-</button>
          <span className="optionCounterNumber">2</span>
          <button className="optionCounterBtn">+</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
