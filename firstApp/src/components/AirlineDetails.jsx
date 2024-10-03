import React, { useState } from "react";
import { airlineData } from "./data.jsx"; // Importing the airline data

function AirlineDetails() {
    const [searchTerm, setSearchTerm] = useState("");
    const [airlines, setAirlines] = useState(airlineData); // Manage airlines in state

    // Filter the airlines based on the search term
    const filteredAirlines = airlines.filter((airline) =>
        airline.AirlineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airline.IataCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airline.Headquarters.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airline.Country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to handle deleting an airline
    const handleDelete = (airlineId) => {
        const updatedAirlines = airlines.filter((airline) => airline.AirlineId !== airlineId);
        setAirlines(updatedAirlines); // Update state with the filtered list
    };

    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar space */}
            <div className="hidden md:block w-1/6">
                {/* Empty div for sidebar space */}
            </div>

            {/* Main content for Airline Details */}
            <div className="container mx-auto bg-white rounded-lg border border-gray-300 p-6 md:w-3/4 w-full">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center space-y-3 h-55">
                    <h1 className="text-3xl font-bold">Airline Details</h1>
                </div>

                <div className="controls flex flex-col md:flex-row justify-between items-center mb-4 mt-6">
                    <input
                        type="text"
                        placeholder="You can search here"
                        className="w-full md:w-3/4 p-2 border border-gray-300 rounded-md mb-2 md:mb-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
                    />
                    <button className="search-btn bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
                        Search 
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse mt-4">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-3 bg-gray-200">#</th>
                                <th className="border border-gray-300 p-3 bg-gray-200">Airline Name</th>
                                <th className="border border-gray-300 p-3 bg-gray-200">IATA Code</th>
                                <th className="border border-gray-300 p-3 bg-gray-200">Headquarters</th>
                                <th className="border border-gray-300 p-3 bg-gray-200">Country</th>
                                <th className="border border-gray-300 p-3 bg-gray-200">Actions</th> {/* New Actions Header */}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAirlines.length > 0 ? (
                                filteredAirlines.map((airline, index) => (
                                    <tr key={airline.AirlineId}>
                                        <td className="border border-gray-300 p-3">{index + 1}</td>
                                        <td className="border border-gray-300 p-3">{airline.AirlineName}</td>
                                        <td className="border border-gray-300 p-3">{airline.IataCode}</td>
                                        <td className="border border-gray-300 p-3">{airline.Headquarters}</td>
                                        <td className="border border-gray-300 p-3">{airline.Country}</td>
                                        <td className="border border-gray-300 p-3">
                                            <button 
                                                onClick={() => handleDelete(airline.AirlineId)} // Call delete function
                                                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="border border-gray-300 p-3 text-center">
                                        No Airlines Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AirlineDetails;
