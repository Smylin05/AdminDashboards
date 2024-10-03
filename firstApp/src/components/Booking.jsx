import React from 'react';
import bookings from './bookingData'; // Adjust the import path as necessary

const Booking = () => {
  return (
    <div className=" p-4"> {/* Outer container with dark blue background */}
      {/* Main Table Container */}
      <div className="flex justify-center ">
        <div className="overflow-x-auto w-full max-w-3xl shadow-lg"> 
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4"> 
            
            {/* Header Section with Logo */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center space-y-3 h-55">
              
                 <h1 className="text-3xl font-bold">Booking Details</h1>
           
            </div>

            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gray-200 border border-gray-300 px-4 py-2 text-center">Booking ID</th>
                  <th className="bg-gray-200 border border-gray-300 px-4 py-2 text-center">Total Passengers</th>
                  <th className="bg-gray-200 border border-gray-300 px-4 py-2 text-center">Booking Date</th>
                  <th className="bg-gray-200 border border-gray-300 px-4 py-2 text-center">Total Amount</th>
                  <th className="bg-gray-200 border border-gray-300 px-4 py-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.BookingId}>
                    <td className="border border-gray-300 px-4 py-2 text-center">{booking.BookingId}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{booking.TotalPassengers}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{booking.BookingDate}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{booking.TotalAmount}</td>
                    <td className={`border border-gray-300 px-4 py-2 text-center ${getStatusClass(booking.BookingStatus)}`}>
                      {booking.BookingStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> {/* End of Inner Table Container */}
        </div>
      </div>
    </div>
  );
};

// Function to get the corresponding Tailwind CSS class for each booking status
const getStatusClass = (status) => {
  switch (status) {
    case 'Confirmed':
      return 'text-green-600'; // Green for confirmed
    case 'Cancelled':
      return 'text-red-600'; // Red for cancelled
    case 'Pending':
      return 'text-blue-600'; // Blue for pending
    default:
      return 'text-gray-600'; // Default color
  }
};

export default Booking;
