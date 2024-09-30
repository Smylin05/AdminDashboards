import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ScheduleFlights = () => {
    // Sample flight data
    const [flights, setFlights] = useState([
      {
        airline: 'Emirates',
        flightNo: '108',
        src: 'NSK',
        dest: 'BOM',
        adt: '2024-05-04 23:50:00',
        ddt: '2024-05-05 00:50:00',
        cec: '1004',
        cbc: '8004',
        cfc: '5004',
      },
      {
        airline: 'IndiGo',
        flightNo: '202',
        src: 'NSK',
        dest: 'BOM',
        adt: '2024-05-04 21:20:00',
        ddt: '2024-05-04 22:40:00',
        cec: '1005',
        cbc: '8002',
        cfc: '5005',
      },
    ]);

    return (
        <div className="min-h-screen bg-white-100">
        <header className="flex justify-between items-center bg-white p-0">
          <img src="aeroflexlogo.png" alt="Logo" className="h-24" />
          <div className="flex space-x-2">
            <button className="btn bg-gray-200  text-black px-4 py-2 rounded shadow hover:bg-gray-300  transition">
              <i className='bx bxs-plane-alt'></i> ADD NEW FLIGHT
            </button>
            <button className="btn  bg-gray-200 text-black px-4 py-2 rounded shadow hover:bg-gray-300  transition">
              <i className='bx bxs-plane-alt'></i> ADD NEW AIRLINE
            </button>
          </div>
        </header>

        <div className="container mx-auto my-8">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Schedule Flight Details</h2>
              <button className="btn bg-yellow-500 text-black px-4 py-2 rounded shadow hover:bg-yellow-600 transition">
                <i className="fa-solid fa-calendar-days"></i> Schedule Flights
              </button>
            </div>

            <div className="mb-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="search-input"
                  placeholder="You can search here"
                  className="flex-grow border border-gray-300 p-2 rounded"
                />
                <button className="btn bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-400 transition">
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </button>
              </div>
              <small className="text-gray-500">(You can search flight details using flight no)</small>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b">Airline Name</th>
                    <th className="py-2 px-4 border-b">Flight No</th>
                    <th className="py-2 px-4 border-b">Src</th>
                    <th className="py-2 px-4 border-b">Dest</th>
                    <th className="py-2 px-4 border-b">ADT</th>
                    <th className="py-2 px-4 border-b">DDT</th>
                    <th className="py-2 px-4 border-b">CEC</th>
                    <th className="py-2 px-4 border-b">CBC</th>
                    <th className="py-2 px-4 border-b">CFC</th>
                    <th className="py-2 px-4 border-b">Make Changes</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b">{flight.airline}</td>
                      <td className="py-2 px-4 border-b">{flight.flightNo}</td>
                      <td className="py-2 px-4 border-b">{flight.src}</td>
                      <td className="py-2 px-4 border-b">{flight.dest}</td>
                      <td className="py-2 px-4 border-b">{flight.adt}</td>
                      <td className="py-2 px-4 border-b">{flight.ddt}</td>
                      <td className="py-2 px-4 border-b">{flight.cec}</td>
                      <td className="py-2 px-4 border-b">{flight.cbc}</td>
                      <td className="py-2 px-4 border-b">{flight.cfc}</td>
                      <td className="py-2 px-4 border-b">
                        <button className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-700 transition duration-300">Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded mr-2 hover:bg-red-600 transition duration-300">Remove</button>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 transition duration-300">Delete</button>
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
