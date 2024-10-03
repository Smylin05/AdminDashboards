import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EditAirport = ({ onUpdateAirport }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const airport = location.state.airport;

    const [editFormData, setEditFormData] = useState({
        AirportId: airport.AirportId,
        AirportName: airport.AirportName,
        IataCode: airport.IataCode,
        City: airport.City,
        Country: airport.Country,
    });

    const handleFormChange = (e) => {
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value,
        });
    };

    

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedAirport = editFormData;

        // Call the onUpdateAirport prop to update the airport
        if (onUpdateAirport) {
            onUpdateAirport(updatedAirport);
        } else {
            console.error('onUpdateAirport prop not provided in EditAirport');
        }

        // Navigate back to the airport details page
        navigate('/airport-details');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="border border-gray-300 shadow-md bg-white p-4 rounded-md">
                <h2 className="text-xl font-bold mb-6">Edit Airport Details</h2>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 gap-4">
                        <input
                            type="text"
                            name="AirportName"
                            value={editFormData.AirportName}
                            onChange={handleFormChange}
                            placeholder="Airport Name"
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            name="IataCode"
                            value={editFormData.IataCode}
                            onChange={handleFormChange}
                            placeholder="IATA Code"
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            name="City"
                            value={editFormData.City}
                            onChange={handleFormChange}
                            placeholder="City"
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            name="Country"
                            value={editFormData.Country}
                            onChange={handleFormChange}
                            placeholder="Country"
                            className="border p-2 rounded-md"
                            required
                        />
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-green-500 text-white font-medium h-10 w-24 px-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                className="bg-gray-500 text-white font-medium h-10 w-24 px-2 rounded-md hover:bg-gray-700 transition-colors duration-300 ml-4"
                                onClick={() => navigate('/airport-details')} // Navigate to airport details
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAirport;
