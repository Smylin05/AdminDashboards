import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialAirports = [
    { AirportId: 1, AirportName: 'John F. Kennedy International Airport', IataCode: 'JFK', City: 'New York', Country: 'USA' },
    { AirportId: 2, AirportName: 'Los Angeles International Airport', IataCode: 'LAX', City: 'Los Angeles', Country: 'USA' },
    { AirportId: 3, AirportName: 'Heathrow Airport', IataCode: 'LHR', City: 'London', Country: 'UK' },
    { AirportId: 4, AirportName: 'Changi Airport', IataCode: 'SIN', City: 'Singapore', Country: 'Singapore' },
    { AirportId: 5, AirportName: 'Chennai International Airport', IataCode: 'MAA', City: 'Chennai', Country: 'India' },
    { AirportId: 6, AirportName: 'Kempegowda International Airport', IataCode: 'BLR', City: 'Bangalore', Country: 'India' }
];

const Airport = () => {
    const [airports, setAirports] = useState(initialAirports);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleUpdateAirport = (updatedAirport) => {
        // Update the airport data in your state or perform an API call
        setAirports(airports.map((airport) => (airport.AirportId === updatedAirport.AirportId ? updatedAirport : airport)));
      };

    // Handle airport deletion
    const handleDelete = (airportId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this airport?');
        if (confirmDelete) {
            const updatedAirports = airports.filter((airport) => airport.AirportId !== airportId);
            setAirports(updatedAirports);
        }
    };

    // Navigate to the edit airport page with the selected airport data
    const handleEdit = (airport) => {
        navigate('/edit-airport', { state: { airport } });
    };

    // Filter airports based on the search query
    const filteredAirports = airports.filter((airport) =>
        airport.AirportName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        airport.City.toLowerCase().includes(searchQuery.toLowerCase()) ||
        airport.Country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <div className="border border-gray-300 shadow-md bg-white p-4 rounded-md">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center space-y-3 h-55">
                    <h1 className="text-3xl font-bold">Airport Details</h1>
                </div>

                <div className="relative my-4">
                    <input
                        type="text"
                        placeholder="Search by Airport Name, City, or Country"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center bg-gray-300 px-4 rounded-r-md">
                        <i className='bx bx-search text-black' style={{ fontSize: '1.5rem' }}></i>
                    </div>
                </div>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Airport ID</th>
                            <th className="border px-4 py-2">Airport Name</th>
                            <th className="border px-4 py-2">IATA Code</th>
                            <th className="border px-4 py-2">City</th>
                            <th className="border px-4 py-2">Country</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAirports.length > 0 ? (
                            filteredAirports.map((airport) => (
                                <tr key={airport.AirportId} className="hover:bg-gray-100">
                                    <td className="border px-4 py-2">{airport.AirportId}</td>
                                    <td className="border px-4 py-2">{airport.AirportName}</td>
                                    <td className="border px-4 py-2">{airport.IataCode}</td>
                                    <td className="border px-4 py-2">{airport.City}</td>
                                    <td className="border px-4 py-2">{airport.Country}</td>
                                    <td className="border px-4 py-2 space-x-2">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                                            onClick={() => handleEdit(airport)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
                                            onClick={() => handleDelete(airport.AirportId)} // Pass the AirportId directly
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No airports found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Airport;
