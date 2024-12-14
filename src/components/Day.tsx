import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

interface DayProps {
  day: dayjs.Dayjs;
  rowIdx: number;
}

const Day: React.FC<DayProps> = ({ day, rowIdx }) => {
  const { daySelected, setDaySelected, events }: any =
    useContext(GlobalContext);

  const eventsForDay = events.filter(
    (event: any) => event.date === day.format("DD-MM-YY")
  );

  // Function to determine event color based on category
  const getEventColor = (category: string) => {
    switch (category) {
      case "work":
        return "bg-red-300 text-red-700"; // Red for work
      case "personal":
        return "bg-blue-200 text-blue-700"; // Blue for personal
      case "others":
        return "bg-green-100 text-green-700"; // Green for others
      default:
        return "bg-blue-100 text-gray-700"; // Default color
    }
  };

  function getCurrentDayClass() {
    const format = "DD-MM-YY";
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (currDay === slcDay) {
      return "bg-blue-300 rounded-full text-blue-900 ";
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
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p
          className={`text-sm mt-2 p-1 my-1 text-center ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div className="mt-2">
        {eventsForDay.map((event: any, index: number) => (
          <div
            key={index}
            className={`text-sm font-extrabold rounded p-1 mb-1 ${getEventColor(
              event.category
            )}`} // Apply category color
          >
            {event.eventName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
