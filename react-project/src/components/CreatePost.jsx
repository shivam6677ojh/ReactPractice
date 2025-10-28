import React, { useState } from "react";

export default function CreatePost() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        check: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form submitted! Check console for data.");
    };

    return (
        <div className="bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm border border-gray-100"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Create Post
                </h2>

                {/* Email Field */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="you@example.com"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="Enter password"
                    />
                </div>

                {/* Checkbox */}
                <div className="flex items-center mb-4">
                    <input
                        id="check"
                        name="check"
                        type="checkbox"
                        checked={formData.check}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="check" className="ml-2 text-sm text-gray-700">
                        Check me out
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
