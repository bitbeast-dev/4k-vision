import React, { useEffect, useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(true); // Show on load

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Optional Main Content */}
      <h1 className="text-3xl font-bold text-gray-800">Welcome to the Site</h1>

      {/* Payment Reminder Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg mx-4 p-6 rounded-2xl shadow-2xl border border-red-500 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-2">
                URGENT PAYMENT NOTICE
              </h2>
              <p className="text-gray-700 mb-4">
                This website was professionally developed by{" "}
                <strong>Tuyizere Honore</strong>.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 mb-4 rounded">
                <p>
                  <strong>
                    ⚠️ Payment for development services has not been completed.
                  </strong>
                </p>
                <p>
                  Please settle the outstanding balance to avoid service
                  interruption.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-2">
               What You Need to Do
              </h3>
              <ul className="text-gray-700 list-disc list-inside mb-4 text-left">
                <li>Contact the developer immediately</li>
                <li>Discuss any issues or delays respectfully</li>
                <li>Complete the agreed payment</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-3 rounded mb-4 text-sm text-left">
                🚫{" "}
                <strong>Failure to respond</strong> may result in this site
                being <strong>disabled or taken offline</strong>, and the issue
                may be escalated legally.
              </div>

              <div className="mb-4 text-left">
                <p className="font-semibold">Contact Info</p>
                <p>Phone: <strong>0784778722</strong></p>
                <p>WhatsApp: <strong>0794937372</strong></p>
                <p>Email: <strong>honoretuyizere8@gmail.com</strong></p>
                
              </div>

            
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
