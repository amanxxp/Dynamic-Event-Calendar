import React, { useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'
export default function ContextWrapper(props:any) {
    const [monthIndex,setMonthIndex] = useState(dayjs().month());
    const [daySelected,setDaySelected]=useState("");
  return (
    <GlobalContext.Provider value={{monthIndex,setMonthIndex,daySelected,setDaySelected}}>
        {props.children}
    </GlobalContext.Provider>
  )
}
