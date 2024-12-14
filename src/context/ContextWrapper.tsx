import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

// Properly type the props
interface ContextWrapperProps {
  children: React.ReactNode; // Ensures 'children' is typed correctly
}

const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
  const [daySelected, setDaySelected] = useState<dayjs.Dayjs>(dayjs()); // Updated type
  const [showEventModal, setShowEventModal] = useState<boolean>(false);

  const [events, setEvents] = useState<any[]>(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        events,
        setEvents,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
