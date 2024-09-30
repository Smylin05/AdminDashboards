import React from 'react';

function AdminApproval() {
    return (
        <div className="bg-white-100 flex items-center justify-center min-h-screen ">
           <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md w-96 mt-0"> {/* Added border class and margin-top */}
                <h2 className="text-xl font-semibold mb-4">Company Information</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="companyName">Company Name</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="companyName" 
                            type="text" 
                            // placeholder="Enter company name" 
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="registrationNumber">Company Registration Number</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="registrationNumber" 
                            type="text" 
                            // placeholder="Enter registration number" 
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="email">Company Email</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            // placeholder="Enter company email" 
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="phoneNumber">Company Phone Number</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="phoneNumber" 
                            type="tel" 
                            // placeholder="Enter phone number" 
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="licenseNumber">Operating License Number</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="licenseNumber" 
                            type="text" 
                            // placeholder="Enter license number" 
                            required 
                        />
                    </div>

                    {/* Centered Buttons */}
                    <div className="flex justify-center space-x-4 mt-6">
                        <button 
                            type="submit" 
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                        >
                            Approve
                        </button>
                        <button 
                            type="button" 
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminApproval;
