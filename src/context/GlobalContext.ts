import React from "react";

const GlobalContext: React.Context<{
  monthIndex: number;
  setMonthIndex: (index: any) => void;
  daySelected:string;
  setDaySelected:(day:any)=>void;
}> = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: any) => {},
  daySelected:"",
  setDaySelected:(day:any)=>{}
});
export default GlobalContext;
