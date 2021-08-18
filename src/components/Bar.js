import React from "react";
import DatePicker from "./DatePicker";
import { getInitialDate } from "../functions/date";

const Bar = () => {
  const getUrl = () => {
    const date = getInitialDate();
    return `https://www.foryoursweetheart.org/Api/createExcel?start_date=${date.startDate}&end_date=${date.endDate}`;
  };

  return (
    <div className="app-bar app-container">
      <div className="app-bar__date">
        <DatePicker />
      </div>
      <div className="app-bar__button">
        <a
          href={getUrl()}
          className="app-datepicker__button app-button app-button--download"
          download
        >
          Export
        </a>
      </div>
    </div>
  );
};

export default Bar;
