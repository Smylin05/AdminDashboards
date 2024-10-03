import React, { useState } from 'react';

const AddFlightTax = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    countryId: '',
    classId: '',
    taxType: '',
    taxRate: '',
    currencyId: '',
    travelType: 'DOMESTIC',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      countryId: '',
      classId: '',
      taxType: '',
      taxRate: '',
      currencyId: '',
      travelType: 'DOMESTIC',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white-100 p-6 rounded-lg shadow-lg border border-gray-300 mx-auto w-96" // Added border and shadow
    >
      <h2 className="text-xl font-bold mb-4">Add Flight Tax</h2>

      <div className="mb-4">
      <label className="block mb-2 font-semibold text-left">Country ID:</label>
      {/* Bold label */}
        <input
          type="number"
          name="countryId"
          value={formData.countryId}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 rounded w-full shadow-md" // More pronounced shadow

        />
      </div>

      <div className="mb-4">
       <label className="block mb-2 font-semibold text-left">Class ID:</label> {/* Bold label */}
        <input
          type="number"
          name="classId"
          value={formData.classId}
          onChange={handleChange}
          required
           className="border border-gray-400 p-2 rounded w-full shadow-md"
        />
      </div>

      <div className="mb-4">
      <label className="block mb-2 font-semibold text-left">Tax Type:</label> {/* Bold label */}
        <select
          name="taxType"
          value={formData.taxType}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded w-full shadow-md"
        >
          <option value="Airport Tax">Airport Tax</option>
          <option value="INTERNATIONAL">Value Added Tax </option>
          <option value="INTERNATIONAL"> International Departure Tax </option>
          
        </select>
      </div>

      <div className="mb-4">
      <label className="block mb-2 font-semibold text-left">Tax Rate:</label> {/* Bold label */}
        <input
          type="number"
          name="taxRate"
          value={formData.taxRate}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 rounded w-full shadow-md"
        />
      </div>

      <div className="mb-4">
         <label className="block mb-2 font-semibold text-left">Currency ID:</label> {/* Bold label */}
        <input
          type="number"
          name="currencyId"
          value={formData.currencyId}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 rounded w-full shadow-md"
        />
      </div>

      <div className="mb-4">
      <label className="block mb-2 font-semibold text-left">Travel Type:</label> {/* Bold label */}
        <select
          name="travelType"
          value={formData.travelType}
          onChange={handleChange}
         className="border border-gray-400 p-2 rounded w-full shadow-md"
        >
          <option value="DOMESTIC">Domestic</option>
          <option value="INTERNATIONAL">International</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add  Tax
      </button>
    </form>
  );
};

export default AddFlightTax;
