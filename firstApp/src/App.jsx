import { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/admindashboard';
import ScheduleFlights from './components/ScheduleFlights'; // Import ScheduleFlights
import AirlineDetails from './components/AirlineDetails';
import AdminApproval from './components/AdminApproval';
import Booking from './components/Booking';
import ViewFlight from './components/ViewFlight';
import Airport from './components/Airport';
import EditAirport from './components/EditAirport';
import Payment from './components/Payment';
import FlightTax from './components/FlightTax';
import CountryTax from './components/CountryTax';
import AddFlightTax from './components/AddFlightTax';
import AddCountryTax from './components/AddCountryTax';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/schedule-flights" element={<ScheduleFlights />}>
          {/* <Route path="bookings" element={<Booking />} /> */}
      </Route>
      <Route path="/bookings" element={<Booking />} />
      <Route path="/view" element={<ViewFlight />} />
        <Route path="/airline-details" element={<AirlineDetails />} />
        <Route path="/admin-approval" element={<AdminApproval />} />
        <Route path="/airport-details" element={<Airport />} />
        <Route path="/edit-airport" element={<EditAirport />} />
        <Route path="/payment-history" element={<Payment/>}/>
        <Route path="/flight-tax" element={<FlightTax/>}/>
        <Route path="/country-tax" element={<CountryTax/>}/>
        <Route path="/add-flight-tax" element={<AddFlightTax/>} />
        <Route path="/add-country-tax" element={<AddCountryTax/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
