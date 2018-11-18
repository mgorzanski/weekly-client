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
            <li className="active"><Link to="/">Calendar</Link></li>
            <li><Link to="/">Calendar</Link></li>
            <li><Link to="/">Calendar</Link></li>
            <li><Link to="/">Calendar</Link></li>
          </ul>
        </nav>
        <nav className="header-account-nav">
          <ul className="header-account-menu">
            <li><Link to="/">matigora</Link></li>
            <li><Link to="/"><i className="fas fa-cogs fa-2x"></i></Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;