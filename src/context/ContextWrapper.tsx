import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

// Properly type the props
interface ContextWrapperProps {
  children: React.ReactNode; // Ensures 'children' is typed correctly
}

const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
  const [daySelected, setDaySelected] = useState<string>("");
  const [showEventModal, setShowEventModal] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
