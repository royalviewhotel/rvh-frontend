import React, { useState } from "react";
// Datepicker
import DatePicker from "react-datepicker";
// Datepicker CSS
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
// Icons
import { BsCalendar } from "react-icons/bs";

const CheckIn = ({ checkInDate, setCheckInDate }) => {
  return (
    <div className="relative flex items-center justify-end h-full cursor-pointer">
      {/* Icon */}
      <div className="absolute z-1 pr-8 ">
        <div>
          <BsCalendar className="text-accent font-tertiary text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full cursor-pointer font-tertiary tracking-[3px] placeholder:font-tertiary"
        selected={checkInDate}
        placeholderText="Check In"
        minDate={new Date()}
        onChange={(date) => setCheckInDate(date)}
      />
    </div>
  );
};

export default CheckIn;
