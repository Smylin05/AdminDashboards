import { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/admindashboard';
import ScheduleFlights from './components/ScheduleFlights'; // Import ScheduleFlights
import AirlineDetails from './components/AirlineDetails';
import AdminApproval from './components/AdminApproval';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/schedule-flights" element={<ScheduleFlights />} />
        <Route path="/airline-details" element={<AirlineDetails />}/>
        <Route path="/admin-approval" element={<AdminApproval/>}/>
      </Routes>
    </Router>
  );
}

export default App;
