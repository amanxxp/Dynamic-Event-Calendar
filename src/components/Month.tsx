import dayjs from "dayjs";
import React, { useContext } from "react";
import Day from "./Day";
import GlobalContext from "../context/GlobalContext";

// Use PascalCase for interfaces
interface MonthsProps {
  month: dayjs.Dayjs[][]; // Assuming month is a 2D array of dayjs objects
}

const Month: React.FC<MonthsProps> = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={`${i}-${idx}`} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
