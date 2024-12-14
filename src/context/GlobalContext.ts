import React from "react";

// Define a type for the context values
interface GlobalContextType {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  daySelected: string;
  setDaySelected: (day: string) => void;
  showEventModal: boolean;
  setShowEventModal: (state: boolean) => void;
}

// Create the context with default values
const GlobalContext = React.createContext<GlobalContextType>({
  monthIndex: 0,
  setMonthIndex: () => {},
  daySelected: "",
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
});

export default GlobalContext;
