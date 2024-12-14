import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Type definition for Event to improve type safety
interface Event {
  id: string;
  eventName: string;
  date: string | Date;
  startTime: string;
  endTime: string;
  description: string;
  category: string;
}

// Helper function to convert events to CSV format
const convertToCSV = (events: Event[]) => {
  const headers = [
    "id",
    "eventName",
    "date",
    "startTime",
    "endTime",
    "description",
    "category",
  ];
  const rows = events.map((event) => [
    event.id,
    event.eventName,
    dayjs(event.date).format("YYYY-MM-DD"),
    event.startTime,
    event.endTime,
    event.description,
    event.category,
  ]);
  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");
  return csvContent;
};

// Export events as JSON
const exportAsJSON = (events: Event[]) => {
  const jsonData = JSON.stringify(events, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `events-${dayjs().format("YYYY-MM-DD")}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

// Export events as CSV
const exportAsCSV = (events: Event[]) => {
  const csvContent = convertToCSV(events);
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `events-${dayjs().format("YYYY-MM-DD")}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex, events } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="mr-10 text-black-500 text-4xl my-2 font-extrabold">
          Dynamic Calendar
        </h1>
        <button
          onClick={handleReset}
          className="border-2 rounded-xl py-2 px-4 mr-5 shadow-xl text-xl"
        >
          Today
        </button>
        <div className="mt-2">
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>

      <div className="flex items-center">
        {/* Export Buttons */}
        <button
          onClick={() => exportAsJSON(events)}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
        >
          Export as JSON
        </button>
        <button
          onClick={() => exportAsCSV(events)}
          className="bg-green-500 text-white px-4 py-2 rounded ml-4"
        >
          Export as CSV
        </button>
      </div>
    </header>
  );
};

export default CalendarHeader;
