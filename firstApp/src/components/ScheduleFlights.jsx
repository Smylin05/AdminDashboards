import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { flightData } from './flightData'; // Import the flight data

//view Flight 
const handleViewFlight = () => {
  // Navigate to the View component
  navigate('/view');
};

const ScheduleFlights = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [flights, setFlights] = useState(flightData);
  
  const [searchFlightNo, setSearchFlightNo] = useState('');
  const [searchDepartureDate, setSearchDepartureDate] = useState('');
  const [searchArrivalDate, setSearchArrivalDate] = useState('');

  const [sortOrderDeparture, setSortOrderDeparture] = useState('ascending');
  const [sortOrderArrival, setSortOrderArrival] = useState('ascending');

  const formatDateToYYYYMMDD = (date) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  const handleDeleteFlight = (index) => {
    const filteredFlights = flights.filter((_, flightIndex) => flightIndex !== index);
    setFlights(filteredFlights);
  };

  const sortedFlights = [...flights].sort((a, b) => {
    const dateA = new Date(a.departureDateTime);
    const dateB = new Date(b.departureDateTime);
    
    // Sort by departure date first
    if (dateA < dateB) return sortOrderDeparture === 'ascending' ? -1 : 1;
    if (dateA > dateB) return sortOrderDeparture === 'ascending' ? 1 : -1;

    // If departure dates are equal, sort by arrival date
    const arrivalA = new Date(a.arrivalDateTime);
    const arrivalB = new Date(b.arrivalDateTime);
    
    return arrivalA < arrivalB ? (sortOrderArrival === 'ascending' ? -1 : 1) :
           arrivalA > arrivalB ? (sortOrderArrival === 'ascending' ? 1 : -1) : 0;
  });

  const filteredFlights = sortedFlights.filter(flight => {
    const matchesFlightNo = flight.flightNo.toLowerCase().includes(searchFlightNo.toLowerCase());
    const flightDepartureDate = formatDateToYYYYMMDD(flight.departureDateTime);
    const flightArrivalDate = formatDateToYYYYMMDD(flight.arrivalDateTime);
    
    const matchesDepartureDate = searchDepartureDate ? flightDepartureDate.startsWith(searchDepartureDate) : true;
    const matchesArrivalDate = searchArrivalDate ? flightArrivalDate.startsWith(searchArrivalDate) : true;

    return matchesFlightNo && matchesDepartureDate && matchesArrivalDate;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* <header className="flex justify-between items-center bg-white p-4">
        <img src="aeroflexlogo.png" alt="Logo" className="h-24" />
        <div className="flex space-x-2">
          <button className="btn bg-gray-200 text-black px-4 py-2 rounded shadow hover:bg-gray-300 transition">
            ADD NEW FLIGHT
          </button>
          <button className="btn bg-gray-200 text-black px-4 py-2 rounded shadow hover:bg-gray-300 transition">
            ADD NEW AIRLINE
          </button>
        </div>
      </header> */}

       <div className="container mx-auto my-4 px-4"> {/* Change my-8 to my-4 or my-2 */}
  <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center space-y-3 h-55 mb-6">
            <h1 className="text-3xl font-bold">Scheduled Flight Details</h1>
        </div>


          <div className="mb-4">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
              <input
                type="text"
                id="search-flight-no"
                placeholder="Flight Number"
                value={searchFlightNo}
                onChange={(e) => setSearchFlightNo(e.target.value)}
                className="flex-grow border border-gray-300 p-2 rounded mb-2 md:mb-0"
              />
              <input
                type="date"
                id="search-departure-date"
                placeholder="YYYY-MM-DD"
                value={searchDepartureDate}
                onChange={(e) => setSearchDepartureDate(e.target.value)}
                className="flex-grow border border-gray-300 p-2 rounded mb-2 md:mb-0"
              />
              <input
                type="date"
                id="search-arrival-date"
                placeholder="YYYY-MM-DD"
                value={searchArrivalDate}
                onChange={(e) => setSearchArrivalDate(e.target.value)}
                className="flex-grow border border-gray-300 p-2 rounded mb-2 md:mb-0"
              />
              <button className="btn bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-400 transition">
                Search
              </button>
            </div>
            <small className="text-gray-500">(You can search flight details)</small>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Flight Id</th>
                  <th className="py-2 px-4 border-b">Flight Number</th>
                  <th className="py-2 px-4 border-b">Aircraft Type</th>
                  <th className="py-2 px-4 border-b">Flight Type</th>
                  <th className="py-2 px-4 border-b">
                    <div className="flex flex-col items-center">
                      <span>Departure Date and Time</span>
                      <div className="flex justify-center space-x-2 mt-1">
                        <button 
                          onClick={() => {
                            setSortOrderDeparture(prev => prev === 'ascending' ? 'descending' : 'ascending');
                          }}
                          className={`p-2 ${sortOrderDeparture === 'ascending' ? 'text-blue-500' : 'text-gray-500'}`}
                          aria-label="Sort Departure"
                        >
                          <i className="fa-solid fa-arrow-up"></i>
                        </button>
                        <button 
                          onClick={() => {
                            setSortOrderDeparture(prev => prev === 'descending' ? 'ascending' : 'descending');
                          }}
                          className={`p-2 ${sortOrderDeparture === 'descending' ? 'text-blue-500' : 'text-gray-500'}`}
                          aria-label="Sort Departure"
                        >
                          <i className="fa-solid fa-arrow-down"></i>
                        </button>
                      </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 border-b">
                    <div className="flex flex-col items-center">
                      <span>Arrival Date and Time</span>
                      <div className="flex justify-center space-x-2 mt-1">
                        <button 
                          onClick={() => {
                            setSortOrderArrival(prev => prev === 'ascending' ? 'descending' : 'ascending');
                          }}
                          className={`p-2 ${sortOrderArrival === 'ascending' ? 'text-blue-500' : 'text-gray-500'}`}
                          aria-label="Sort Arrival"
                        >
                          <i className="fa-solid fa-arrow-up"></i>
                        </button>
                        <button 
                          onClick={() => {
                            setSortOrderArrival(prev => prev === 'descending' ? 'ascending' : 'descending');
                          }}
                          className={`p-2 ${sortOrderArrival === 'descending' ? 'text-blue-500' : 'text-gray-500'}`}
                          aria-label="Sort Arrival"
                        >
                          <i className="fa-solid fa-arrow-down"></i>
                        </button>
                      </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 border-b">Total Seats</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFlights.map((flight, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{flight.flightNo}</td>
                    <td className="py-2 px-4 border-b">{flight.aircraftType}</td>
                    <td className="py-2 px-4 border-b">{flight.flightType}</td>
                    <td className="py-2 px-4 border-b">{flight.departureDateTime}</td>
                    <td className="py-2 px-4 border-b">{flight.arrivalDateTime}</td>
                    <td className="py-2 px-4 border-b">{flight.totalSeats}</td>
                    <td className="py-2 px-4 border-b">
                    <div className="flex items-center"> {/* Flex container for horizontal alignment */}
                    <button 
  onClick={() => handleDeleteFlight(index)} 
  className="bg-red-500 hover:bg-red-700 text-white font-small py-2 px-4 rounded"
>
  Delete
</button>

<button 
  onClick={() => navigate('/bookings')} // Navigate to the Bookings component
  className="bg-blue-500 hover:bg-blue-700 text-white font-small py-2 px-4 rounded ml-2"
>
  Bookings
</button>

<button 
  onClick={() => navigate('/view')} // Navigate to the View component
  className="bg-green-500 hover:bg-green-700 text-white font-small py-2 px-4 rounded ml-2"
>
  View
</button>

                    </div>
                  </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFlights;
