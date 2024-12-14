import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
interface DayProps {
  day: dayjs.Dayjs;
  rowIdx: number;
}
const Day: React.FC<DayProps> = ({ day, rowIdx }) => {
  function getCurrentDayClass() {
    const format ="DD-MM-YY";
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if(currDay==slcDay){
      return "bg-blue-100 rounded-full text-blue-600 font-bold"
    }
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  const {daySelected,setDaySelected}:any = useContext(GlobalContext);
  
  return (
      <div className="border cursor-pointer border-gray-200 flex flex-col" onClick={() => {
            setDaySelected(day);
            console.log(day);
          }}>
        <header className="flex flex-col items-center">
          {rowIdx === 0 && (
            <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
          )}
          <p
            className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
          >
            {day.format("DD")}
          </p>
        </header>
      </div>
  );
};

export default Day;
