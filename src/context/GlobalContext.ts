import React from "react";
import dayjs from "dayjs";

// Define a type for the context values
interface GlobalContextType {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  daySelected: dayjs.Dayjs; // Updated type to dayjs.Dayjs
  setDaySelected: (day: dayjs.Dayjs) => void; // Updated type
  showEventModal: boolean;
  setShowEventModal: (state: boolean) => void;
  events: any[]; // Array to hold event objects
  setEvents: (events: any[]) => void; // Setter for events
}

// Create the context with default values
const GlobalContext = React.createContext<GlobalContextType>({
  monthIndex: 0,
  setMonthIndex: () => {},
  daySelected: dayjs(), // Default to the current date
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  events: [],
  setEvents: () => {},
});

export default GlobalContext;
