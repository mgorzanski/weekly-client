import React from 'react';
import './styles/CalendarSidebar.css';

class CalendarSidebar extends React.Component {
  render() {
    return (
      <div className="calendar-left-sidebar">
        <nav className="calendar-left-sidebar-nav">
          <ul className="calendar-left-sidebar-menu">
            <li><i className="far fa-calendar-plus fa-2x"></i><span>Add event</span></li>
            <li><i className="fas fa-plus-circle fa-2x"></i><span>Add task</span></li>
            <li><i className="fas fa-clipboard-list fa-2x"></i><span>Schedule</span></li>
            <li><i class="fas fa-thumbtack fa-2x"></i><span>Goals</span></li>
            <li><i class="far fa-clock fa-2x"></i><span>In free time I can...</span></li>
            <li><i class="fas fa-redo fa-2x"></i><span>Create spaced repetition</span></li>
            <li><i class="far fa-calendar-alt fa-2x"></i><span>Create a new calendar</span></li>
            <li><i class="fas fa-pen fa-2x"></i><span>Write a draft note</span></li>
            <li><i class="fas fa-chart-line fa-2x"></i><span>Show statistics</span></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default CalendarSidebar;