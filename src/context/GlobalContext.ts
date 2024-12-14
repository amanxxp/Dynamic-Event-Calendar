import React from "react";

const GlobalContext: React.Context<{
  monthIndex: number;
  setMonthIndex: (index: any) => void;
}> = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: any) => {},
});
export default GlobalContext;
