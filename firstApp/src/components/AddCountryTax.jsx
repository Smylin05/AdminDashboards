// AddCountryTax.jsx
import React, { useState } from 'react';

const AddCountryTax = () => {
  const [countryId, setCountryId] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryName, setCountryName] = useState('');
  const [currency, setCurrency] = useState('');
  const [taxType, setTaxType] = useState('');
  const [taxRate, setTaxRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to handle adding the country tax (e.g., sending data to a backend or updating state in a parent component)
    const newCountryTax = {
      countryId: parseInt(countryId),
      countryCode,
      countryName,
      currency,
      flightTaxes: [{
        flightTaxId: Date.now(), // Using current timestamp as unique ID for demo purposes
        taxType,
        taxRate: parseFloat(taxRate),
      }],
    };

    console.log('New Country Tax:', newCountryTax);
    // Clear form
    setCountryId('');
    setCountryCode('');
    setCountryName('');
    setCurrency('');
    setTaxType('');
    setTaxRate('');
    // Redirect or update the parent component's state if needed
  };

  return (
    <div className="container mx-auto p-4">
      <div  className="bg-white-100 p-6 rounded-lg shadow-lg border border-gray-300 mx-auto w-96" >
        <h2 className="text-2xl font-bold mb-4">Add Country Tax</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-left">Country ID:</label>
            <input
              type="number"
              value={countryId}
              onChange={(e) => setCountryId(e.target.value)}
              required
              className="border border-gray-400 p-2 rounded w-full shadow-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-left">Country Code:</label>
            <input
              type="text"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
              className="border border-gray-400 p-2 rounded w-full shadow-md"
            
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-left">Country Name:</label>
            <input
              type="text"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              required
              className="border border-gray-400 p-2 rounded w-full shadow-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-left">Currency:</label>
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
              className="border border-gray-400 p-2 rounded w-full shadow-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-left">Tax Type:</label>
            <input
              type="text"
              value={taxType}
              onChange={(e) => setTaxType(e.target.value)}
              required
              className="border border-gray-400 p-2 rounded w-full shadow-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-left">Tax Rate:</label>
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              required
              className="border border-gray-400 p-2 rounded w-full shadow-md"
              step="0.01"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add Country Tax
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCountryTax;
