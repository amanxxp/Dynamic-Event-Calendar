import dayjs from "dayjs";
import React from "react";
import Day from "./Day";

interface MonthsProps {
  month: dayjs.Dayjs[][];
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
