import CalenderHeader from './components/CalenderHeader';
import Month from './components/Month';
import SideBar from './components/SideBar';
import {getMonth} from './utils';
import React, { useState,useContext, useEffect } from 'react';
import GlobalContext from './context/GlobalContext';
const App = () => {
  const [currentMonth,setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext);
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex));
  },[monthIndex]);
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalenderHeader/>
        <div className="flex flex-1">
          <SideBar/>
          <Month month={currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App