import React, { useState } from 'react';

// Payment status enum-like mapping with colors
const paymentStatusMap = {
    1: { text: 'Pending', color: 'text-yellow-600' }, // Yellow for Pending
    2: { text: 'Success', color: 'text-green-600' }, // Green for Success
    3: { text: 'Failed', color: 'text-red-600' }      // Red for Failed
};

const initialPayments = [
    { PaymentId: 1, BookingId: 201, ReferenceId: 3001, PaidAmount: 750.00, BalanceAmount: 250.00, PaymentDate: '2024-09-01', PaymentMethod: 'Credit Card', PaymentStatus: 1 },
    { PaymentId: 2, BookingId: 202, ReferenceId: 3002, PaidAmount: 1500.00, BalanceAmount: 0.00, PaymentDate: '2024-09-05', PaymentMethod: 'PayPal', PaymentStatus: 2 },
    { PaymentId: 3, BookingId: 203, ReferenceId: 3003, PaidAmount: 300.50, BalanceAmount: 100.50, PaymentDate: '2024-09-10', PaymentMethod: 'Debit Card', PaymentStatus: 1 },
    { PaymentId: 4, BookingId: 204, ReferenceId: 3004, PaidAmount: 600.75, BalanceAmount: 0.00, PaymentDate: '2024-09-15', PaymentMethod: 'UPI', PaymentStatus: 2 },
    { PaymentId: 5, BookingId: 205, ReferenceId: 3005, PaidAmount: 400.00, BalanceAmount: 150.00, PaymentDate: '2024-09-20', PaymentMethod: 'Credit Card', PaymentStatus: 3 },
];

const Payment = () => {
    const [payments, setPayments] = useState(initialPayments);

    // Function to handle cancel action
    const handleCancel = (paymentId) => {
        // Filter out the canceled payment
        const updatedPayments = payments.filter(payment => payment.PaymentId !== paymentId);
        setPayments(updatedPayments);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="border border-gray-300 shadow-md bg-white p-4 rounded-md">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center space-y-3 h-55">
                    <h1 className="text-3xl font-bold">Payment Details</h1>
                </div>

                <table className="min-w-full bg-white border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Payment ID</th>
                            <th className="border px-4 py-2">Booking ID</th>
                            <th className="border px-4 py-2">Reference ID</th>
                            <th className="border px-4 py-2">Paid Amount</th>
                            <th className="border px-4 py-2">Balance Amount</th>
                            <th className="border px-4 py-2">Payment Date</th>
                            <th className="border px-4 py-2">Payment Method</th>
                            <th className="border px-4 py-2">Payment Status</th>
                            <th className="border px-4 py-2">Action</th> {/* New header for Action */}
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.PaymentId} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">{payment.PaymentId}</td>
                                <td className="border px-4 py-2">{payment.BookingId}</td>
                                <td className="border px-4 py-2">{payment.ReferenceId}</td>
                                <td className="border px-4 py-2">${payment.PaidAmount.toFixed(2)}</td>
                                <td className="border px-4 py-2">${payment.BalanceAmount.toFixed(2)}</td>
                                <td className="border px-4 py-2">{payment.PaymentDate}</td>
                                <td className="border px-4 py-2">{payment.PaymentMethod}</td>
                                <td className="border px-4 py-2">
                                    <span className={paymentStatusMap[payment.PaymentStatus].color}>
                                        {paymentStatusMap[payment.PaymentStatus].text}
                                    </span>
                                </td>
                                <td className="border px-4 py-2">
    <button
        className="bg-red-600 text-white font-semibold py-1 px-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={() => handleCancel(payment.PaymentId)}
    >
        Cancel
    </button> {/* Cancel button */}
</td>

                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payment;
 