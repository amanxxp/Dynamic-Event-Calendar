import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
interface DayProps {
  day: dayjs.Dayjs;
  rowIdx: number;
}
const Day: React.FC<DayProps> = ({ day, rowIdx }) => {
  const {daySelected,setDaySelected,events}:any = useContext(GlobalContext);

  const eventsForDay = events.filter(
    (event:any) => event.date === day.format("DD-MM-YY")
  );

  function getCurrentDayClass() {
    const format = "DD-MM-YY";
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    }
    return currDay === dayjs().format(format)
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  
  return (
    <div
    className="border cursor-pointer border-gray-200 flex flex-col"
    onClick={() => setDaySelected(day)}
  >
    <header className="flex flex-col items-center">
      {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>}
      <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
        {day.format("DD")}
      </p>
    </header>
    <div className="mt-2">
      {eventsForDay.map((event:any, index:number) => (
        <div
          key={index}
          className="bg-blue-100 text-blue-600 text-xs rounded p-1 mb-1 truncate"
        >
          {event.eventName}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Day;
