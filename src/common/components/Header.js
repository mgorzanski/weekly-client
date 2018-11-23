import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-logo">
          <h2 className="header-logo-text"><Link to="/">Weekly</Link></h2>
        </div>
        <nav className="header-tabs-nav">
          <ul className="header-tabs-menu">
            <li className="active"><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/to-do">To-do</Link></li>
            <li><Link to="/habits">Habits</Link></li>
            <li><Link to="/notes">Notes</Link></li>
          </ul>
        </nav>
        <nav className="header-account-nav">
          <ul className="header-account-menu">
            <li><Link to="/users/matigora">matigora</Link></li>
            <li>
              <div className="dropdown header-settings-dropdown">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-cogs fa-lg"></i>
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="/users/matigora/settings">Settings</a>
                  <a className="dropdown-item" href="/help/">Help</a>
                  <a className="dropdown-item" href="#">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;