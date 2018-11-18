import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <div className="container-fluid">
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
