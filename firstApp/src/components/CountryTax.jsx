// CountryTax.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CountryTax = () => {
  // Hardcoded country tax data
  const countryTaxes = [
    {
      countryId: 1,
      countryCode: "US",
      countryName: "United States",
      currencyId: 1,
      currency: "USD",
      flightTaxes: [
        {
          flightTaxId: 1,
          taxType: "Passenger Tax",
          taxRate: 50.00,
        },
      ],
    },
    {
      countryId: 2,
      countryCode: "CA",
      countryName: "Canada",
      currencyId: 2,
      currency: "CAD",
      flightTaxes: [
        {
          flightTaxId: 3,
          taxType: "Airline Tax",
          taxRate: 75.00,
        },
      ],
    },
    {
      countryId: 3,
      countryCode: "AU",
      countryName: "Australia",
      currencyId: 3,
      currency: "AUD",
      flightTaxes: [
        {
          flightTaxId: 4,
          taxType: "Departure Tax",
          taxRate: 30.00,
        },
      ],
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Initialize useNavigate hook
  const navigate = useNavigate();

  // Filter countries based on search query
  const filteredCountryTaxes = countryTaxes.filter(country => {
    return (
      country.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.countryCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.currency.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center space-y-3">
          <h1 className="text-3xl font-bold">Country Tax Details</h1>
        </div>

        {/* Search Bar and Add Button */}
        <div className="flex justify-between items-center mt-4">
          <input
            type="text"
            placeholder="Search here for country tax details"
            className="border border-gray-300 rounded p-2 w-4/5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
            onClick={() => navigate('/add-country-tax')} // Use navigate to go to Add Country Tax page
          >
            <span><i className='bx bx-plus'></i> Add Country Tax</span>
          </button>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Country ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Country Code</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Country Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Currency</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tax Types</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tax Rates</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCountryTaxes.map((country) => (
                <tr key={country.countryId} className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="border border-gray-300 px-4 py-2">{country.countryId}</td>
                  <td className="border border-gray-300 px-4 py-2">{country.countryCode}</td>
                  <td className="border border-gray-300 px-4 py-2">{country.countryName}</td>
                  <td className="border border-gray-300 px-4 py-2">{country.currency}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {country.flightTaxes.map((tax) => (
                      <div key={tax.flightTaxId}>{tax.taxType}</div>
                    ))}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {country.flightTaxes.map((tax) => (
                      <div key={tax.flightTaxId}>{tax.taxRate.toFixed(2)}</div>
                    ))}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                    <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CountryTax;
