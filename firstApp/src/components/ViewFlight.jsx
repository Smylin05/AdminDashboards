import React from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt } from 'react-icons/fa'; // Import icons

const ViewFlight = () => {
  // Example placeholder data
  const flight = {
    flightNumber: 'ABC123',
    airCraftType: 'Boeing 737',
    departureAirport: {
      city: 'New York',
      airportName: 'JFK Airport',
      iataCode: 'JFK'
    },
    arrivalAirport: {
      city: 'Los Angeles',
      airportName: 'LAX Airport',
      iataCode: 'LAX'
    },
    totalSeats: 180,
    totalSeatColumn: 6,
    flightType: 1, // 1 for Domestic, 2 for International
  };

  return (
    <div className="container mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center space-y-3">
        <h1 className="text-3xl font-bold">Flight Details</h1>
        <p className="text-lg font-bold">
          Flight Number: <span className='bg-red-600 p-2 rounded-lg'>{flight.flightNumber}</span>
        </p>
        <p className="text-lg font-bold">
          Aircraft: <span className='p-2 rounded-lg'>{flight.airCraftType}</span>
        </p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Flight Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Departure Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              <FaPlaneDeparture className="inline-block mr-2" /> Departure Information
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold">From:</span> {flight.departureAirport.city} ({flight.departureAirport.airportName})
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">IATA Code:</span> {flight.departureAirport.iataCode}
            </p>
          </div>

          {/* Arrival Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              <FaPlaneArrival className="inline-block mr-2" /> Arrival Information
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold">To:</span> {flight.arrivalAirport.city} ({flight.arrivalAirport.airportName})
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">IATA Code:</span> {flight.arrivalAirport.iataCode}
            </p>
          </div>
        </div>

        {/* Flight Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flight Seats and Layout */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              <i className="fa-solid fa-chair"></i> Flight Seats Information
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold">Total Seats:</span> {flight.totalSeats}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Seat Layout:</span> {flight.totalSeatColumn} columns
            </p>
          </div>

          {/* Flight Type */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              <FaCalendarAlt className="inline-block mr-2" /> Flight Type
            </h2>
            <p className="text-gray-600">
              {flight.flightType === 1 ? 'Domestic' : 'International'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFlight;
