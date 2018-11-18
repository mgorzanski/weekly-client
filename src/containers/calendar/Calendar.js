import React from 'react';
import './styles/Calendar.css';
import Header from './../../common/components/Header';
import CalendarSidebar from './CalendarSidebar';

class Calendar extends React.Component {
  render() {
    return (
      <div id="calendar-container">
        <Header />
        <CalendarSidebar />
      </div>
    );
  }
}

export default Calendar;