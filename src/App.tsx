import CalenderHeader from './components/CalenderHeader';
import Month from './components/Month';
import SideBar from './components/SideBar';
import {getMonth} from './utils';
import React, { useState,useContext, useEffect } from 'react';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';
const App = () => {
  const [currentMonth,setCurrentMonth] = useState(getMonth());
  const {monthIndex,showEventModal} = useContext(GlobalContext);
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex));
  },[monthIndex]);
  return (
    <React.Fragment>
      {showEventModal && <EventModal/>}
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