import Home from "./pages/Home"
import ArmoryMain from "./pages/ArmoryMain"
import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom'
import ArmorySpecificList from "./pages/ArmorySpecificList"
import ArmorySpecificItem from "./pages/ArmorySpecificItem";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Tarnished Armory</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/armory-main'} className="nav-link">Armory</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/armory-main/*' element={<ArmoryMain />} />
            <Route path='/specific-list' element={<ArmorySpecificList />} />
            <Route path='/specific-item' element={<ArmorySpecificItem />} />
        </Routes>
      </div>
    );
  }
}

export default App;