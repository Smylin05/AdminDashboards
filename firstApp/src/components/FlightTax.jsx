import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const FlightTax = () => {
  const [flightTaxes, setFlightTaxes] = useState([
    { flightTaxId: 1, country: 'USA', class: 'Economy', taxType: 'Value Added Tax', taxRate: '10%', currency: 'USD', travelType: 'International' },
    { flightTaxId: 2, country: 'Canada', class: 'Business', taxType: 'Sales Tax', taxRate: '5%', currency: 'CAD', travelType: 'International' },
    { flightTaxId: 3, country: 'Germany', class: 'First Class', taxType: 'Air Passenger Duty', taxRate: '20%', currency: 'EUR', travelType: 'Domestic' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    const updatedTaxes = flightTaxes.filter((tax) => tax.flightTaxId !== id);
    setFlightTaxes(updatedTaxes);
  };

  const handleEdit = (id) => {
    console.log(`Edit tax with ID: ${id}`);
    // Here you can navigate to an edit page or open a modal
  };

  const filteredTaxes = flightTaxes.filter((tax) =>
    tax.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center space-y-3 h-55">
        <h1 className="text-3xl font-bold">Flight Tax Details</h1>
      </div>

      <div className="mt-4 mb-6 flex flex-col space-y-4 w-full">
        <input
          type="text"
          placeholder="Search by country"
          className="border border-gray-300 p-2 rounded w-full max-w-medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* Link to navigate to AddFlightTax component */}
        <Link
          to="/add-flight-tax" // Ensure this path matches your routing configuration
          className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center hover:bg-yellow-600 self-end font-semibold"
        >
          <span className="mr-2 text-xl">
            <i className="bx bx-plus"></i>
          </span>
          Add Flight Tax
        </Link>
      </div>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Tax ID</th>
            <th className="border border-gray-300 px-4 py-2">Country</th>
            <th className="border border-gray-300 px-4 py-2">Class</th>
            <th className="border border-gray-300 px-4 py-2">Tax Type</th>
            <th className="border border-gray-300 px-4 py-2">Tax Rate</th>
            <th className="border border-gray-300 px-4 py-2">Currency</th>
            <th className="border border-gray-300 px-4 py-2">Travel Type</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTaxes.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No flight taxes found for the specified country.
              </td>
            </tr>
          ) : (
            filteredTaxes.map((tax) => (
              <tr key={tax.flightTaxId}>
                <td className="border border-gray-300 px-4 py-2">{tax.flightTaxId}</td>
                <td className="border border-gray-300 px-4 py-2">{tax.country}</td>
                <td className="border border-gray-300 px-4 py-2">{tax.class}</td>
                <td className="border border-gray-300 px-4 py-2">{tax.taxType}</td>
                <td className="border border-gray-300 px-4 py-2">{tax.taxRate}</td>
                <td className="border border-gray-300 px-4 py-2">{tax.currency}</td>
                <td className="border border-gray-300 px-4 py-2">{tax.travelType}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button 
                    className="bg-green-500 text-white px-2 py-1 mr-2 rounded hover:bg-green-600"
                    onClick={() => handleEdit(tax.flightTaxId)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(tax.flightTaxId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTax;
