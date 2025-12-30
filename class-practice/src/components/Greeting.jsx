import React from 'react';

const Greeting = ({ name, showName, handleChange }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Greeting App
                </h1>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                />

                <button
                    onClick={showName}
                    className="w-full bg-indigo-500 text-white font-medium py-2 rounded-lg hover:bg-indigo-600 transition-all"
                >
                    Show Name
                </button>

                {name && (
                    <p className="mt-6 text-lg text-gray-700 text-center">
                        Welcome <span className="font-semibold text-indigo-600">{name}</span>!
                    </p>
                )}
            </div>
        </div>
    );
};

export default Greeting;
