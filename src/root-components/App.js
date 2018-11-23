import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from './../containers/calendar/Calendar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route path="/" exact component={Calendar} />
            <Route path="/calendar" component={Calendar} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
