import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AddTest from './pages/AddTest';
import Instructions from './pages/Instructions';
import CheckStudens from './pages/CheckStudens';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="sidebar-container">
                	<Sidebar />
                </div>
                <div className="app-container">
                   
                        <Route exact path="/" render= {props => (
                            <Dashboard />
                        )} />    
                        <Route exact path="/addtest" render= {props => (
                            <AddTest />
                        )} />    
                        <Route exact path="/instructions" render= {props => (
                            <Instructions />
                        )} />    
                        <Route exact path="/checkstudents" render= {props => (
                            <CheckStudens />
                        )} />    
              
                </div>
            </Router>
        </div>
    );
}

export default App;
