import React from "react";

function AirlineDetails() {
    return (
        <div className="flex">
            {/* Sidebar space */}
            <div className="w-1/6">
                {/* Empty div for sidebar space */}
            </div>
            
            {/* Main content for Airline Details */}
            <div className="container mx-auto bg-white rounded-lg border border-gray-300 p-6 w-3/4">
                <header className="flex items-center justify-between mb-6">
                    <img src="aeroflexlogo.png" alt="Logo" className="h-20 mr-4" />
                    <h1 className="flex-grow text-center font-semibold text-black text-3xl">Airline Details</h1>
                </header>

                <div className="controls flex justify-between items-center mb-4 mt-6">
                    <input
                        type="text"
                        placeholder="you can search here"
                        className="w-3/4 p-2 border border-gray-300 rounded-md"
                    />
                <button className="search-btn bg-blue-500 text-white px-4 py-2 rounded-md ml-2 flex items-center">
        Search <i className="fa-solid fa-magnifying-glass ml-1"></i>
    </button>
    <div className="flex items-center">
    <button className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md hover:opacity-80 ml-2 whitespace-nowrap inline-flex items-center">
    <i className="fas fa-plus mr-2"></i> Add New Airline
   </button>
</div>


                </div>

                <table className="w-full border-collapse mt-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-gray-200">#</th>
                            <th className="border border-gray-300 p-3 bg-gray-200">Airline Name</th>
                            <th className="border border-gray-300 p-3 bg-gray-200">No of Flights</th>
                            <th className="border border-gray-300 p-3 bg-gray-200">Make Changes</th>
                            <th className="border border-gray-300 p-3 bg-gray-200">Added Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-3">1</td>
                            <td className="border border-gray-300 p-3">Emirates</td>
                            <td className="border border-gray-300 p-3">3</td>
                            <td className="border border-gray-300 p-3">
                            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:opacity-50">Add Flight</button>
                                <button className="bg-red-600 text-white font-semibold py-2 px-3 rounded-md ml-2 hover:opacity-50">Delete</button>
                            </td>
                            <td className="border border-gray-300 p-3">27-04-2024</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-3">2</td>
                            <td className="border border-gray-300 p-3">Air Asia</td>
                            <td className="border border-gray-300 p-3">4</td>
                            <td className="border border-gray-300 p-3">
                            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:opacity-50">Add Flight</button>

                            <button className="bg-red-600 text-white font-semibold py-2 px-3 rounded-md ml-2 hover:opacity-50 ">Delete</button>
                            </td>
                            <td className="border border-gray-300 p-3">30-04-2024</td>
                        </tr>
                        {/* Additional rows can be added here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AirlineDetails;