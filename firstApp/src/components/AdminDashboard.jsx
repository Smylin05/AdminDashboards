import React from "react";
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation to ScheduleFlights
  const handleScheduleClick = () => {
    navigate('/schedule-flights'); // Navigate to the ScheduleFlights page
  };

  // Function to handle navigation to AirlineDetails
  const handleAirlineDetailsClick = () => {
    navigate('/airline-details'); // Navigate to the AirlineDetails page
  };

  // Function to handle navigation to AdminApproval
  const handleAdminApprovalClick = () => {
    navigate('/admin-approval'); // Navigate to the AdminApproval page
  };

  return (
    <div className="flex">
      <nav className="fixed top-0 left-0 h-screen w-64 flex flex-col bg-white shadow-lg">
        <div className="flex items-center bg-gray-800 p-4">
          <img src="logo.jpg" alt="Logo" className="h-24 w-24" />
          <span className="text-white text-2xl font-semibold ml-2">AeroFlex</span>
        </div>
        <div className="flex flex-col h-full bg-gray-800 p-4">
          <ul className="flex flex-col justify-between h-full">
            <li className="my-2">
              <a
                href="#"
                className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white"
              >
                <i className="bx bx-home-alt text-xl mr-2"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="my-2">
              <div
                onClick={handleScheduleClick}
                className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer"
              >
                <i className="bx bxs-calendar text-xl mr-2"></i>
                <span>Flight Schedule</span>
              </div>
            </li>
            <li className="my-2">
              <div
                onClick={handleAirlineDetailsClick}
                className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer"
              >
                <i className="bx bxs-plane-take-off text-xl mr-2"></i>
                <span>Airline Details</span>
              </div>
            </li>
            <li className="my-2">
              {/* Updated to use onClick for Admin Approval navigation */}
              <div
                onClick={handleAdminApprovalClick} // Handle click to navigate to AdminApproval
                className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer"
              >
                <i className="bx bxs-user-check text-xl mr-2"></i>
                <span>Flight Owner Approval</span>
              </div>
            </li>
            <li className="my-2">
              <a
                href="#"
                className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white"
              >
                <i className="bx bx-bar-chart-alt-2 text-xl mr-2"></i>
                <span>Statistics</span>
              </a>
            </li>
          </ul>
          <div className="mt-auto">
            <ul className="flex flex-col">
              <li className="my-2">
                <a
                  href="#"
                  className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white"
                >
                  <i className="bx bxs-cog text-xl mr-2"></i>
                  <span>Settings</span>
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white"
                >
                  <i className="bx bx-log-out text-xl mr-2"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="ml-64 flex-grow p-6 bg-white">
        <div className="flex justify-between">
          {/* Flight Cards Container */}
          <div className="flex w-full">
            {/* Flight Cards */}
            <div className="bg-[#002D62] flex flex-col items-center justify-center h-48 w-1/3 m-2 p-4 rounded-lg text-white shadow-lg transition-transform transform hover:translate-y-[-10px]">
              <img src="aeroplane.jpg" alt="Airbus" className="w-32 h-auto" />
              <p className="text-lg font-bold">Airbus 811 -78 flights</p>
            </div>
            <div className="bg-[#002D62] flex flex-col items-center justify-center h-48 w-1/3 m-2 p-4 rounded-lg text-white shadow-lg transition-transform transform hover:translate-y-[-10px]">
              <img src="aeroplane.jpg" alt="Airbus" className="w-32 h-auto" />
              <p className="text-lg font-bold">Boeing 787 -60 flights</p>
            </div>
            <div className="bg-[#002D62] flex flex-col items-center justify-center h-48 w-1/3 m-2 p-4 rounded-lg text-white shadow-lg transition-transform transform hover:translate-y-[-10px]">
              <img src="aeroplane.jpg" alt="Airbus" className="w-32 h-auto" />
              <p className="text-lg font-bold">Total Flights -150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
