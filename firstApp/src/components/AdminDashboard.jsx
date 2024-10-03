import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTaxDropdownOpen, setIsTaxDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Navigation functions
  const handleScheduleClick = () => {
    navigate('/schedule-flights');
  };
  const handleAirlineDetailsClick = () => {
    navigate('/airline-details');
  };
  const handleAdminApprovalClick = () => {
    navigate('/admin-approval');
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle tax dropdown visibility
  const toggleTaxDropdown = () => {
    setIsTaxDropdownOpen(!isTaxDropdownOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 shadow-lg z-10 flex flex-col transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sidebar`}>
      <div className="flex items-center bg-gray-800 p-2"> {/* Adjusted padding from p-4 to p-2 */}
            <img src="logo.jpg" alt="Logo" className="h-20 w-22" />
            <span className="text-white text-2xl font-semibold ml-2">AeroFlex</span>
            <button onClick={toggleSidebar} className="ml-auto text-white text-2xl">
              &times; {/* X Mark */}
            </button>
      </div>

        <ul className="flex-grow bg-blue p-1">
          <li className="my-0">
            <a href="#" className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white">
              <i className="bx bx-home-alt text-xl mr-2"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="my-2" onClick={handleScheduleClick}>
            <div className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="bx bxs-calendar text-xl mr-2"></i>
              <span>Flight Schedule</span>
            </div>
          </li>
          <li className="my-2" onClick={handleAirlineDetailsClick}>
            <div className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="bx bxs-plane-take-off text-xl mr-2"></i>
              <span>Airline Details</span>
            </div>
          </li>
          <li className="my-2" onClick={handleAdminApprovalClick}>
            <div className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="bx bxs-user-check text-xl mr-2"></i>
              <span>Flight Owner Approval</span>
            </div>
          </li>
          <li className="my-2" onClick={() => navigate('/airport-details')}>
            <div className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className='bx bxs-plane-alt text-xl'></i>
              <span>Airport Details</span>
            </div>
          </li>

          <li className="my-2" onClick={() => navigate('/payment-history')}>
            <div className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="bx bx-money text-xl mr-2"></i>
              <span>Payment History</span>
            </div>
          </li>
          
          {/* Tax Settings with Dropdown */}
          <li className="my-2">
            <div onClick={toggleTaxDropdown} className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="bx bxs-cog text-xl mr-2"></i>
              <span>Tax Settings</span>
            </div>
            {isTaxDropdownOpen && (
              <ul className="pl-6">
                <li className="my-2" onClick={() => navigate('/flight-tax')}>
                  <div className="flex items-center p-2 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
                    <span>Flight Tax</span>
                  </div>
                </li>
                <li className="my-2" onClick={() => navigate('/country-tax')}>
                  <div className="flex items-center p-2 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
                    <span>Country Tax</span>
                  </div>
                </li>
              </ul>
            )}
          </li>
          
          <li className="my-2">
            <a href="#" className="flex items-center p-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white">
              <i className="bx bx-log-out text-xl mr-2"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className={`ml-64 p-4 w-full transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} main-content`}>
        <div className="flex justify-between flex-wrap">
          {/* Flight Cards */}
          <div className="bg-[#002D62] flex flex-col items-center justify-center h-54 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-1 p-4 rounded-lg text-white shadow-lg transition-transform transform hover:-translate-y-2">
            <img src="aeroplane.jpg" alt="Airbus" className="w-36 h-auto" />
            <p className="text-lg font-bold">Airbus 811 - 78 flights</p>
          </div>
          <div className="bg-[#002D62] flex flex-col items-center justify-center h-54 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-1 p-4 rounded-lg text-white shadow-lg transition-transform transform hover:-translate-y-2">
            <img src="aeroplane.jpg" alt="Boeing" className="w-36 h-auto" />
            <p className="text-lg font-bold">Boeing 787 - 60 flights</p>
          </div>
          <div className="bg-[#002D62] flex flex-col items-center justify-center h-54 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-1 p-4 rounded-lg text-white shadow-lg transition-transform transform hover:-translate-y-2">
            <img src="aeroplane.jpg" alt="Total" className="w-36 h-auto" />
            <p className="text-lg font-bold">Total Flights - 150</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
