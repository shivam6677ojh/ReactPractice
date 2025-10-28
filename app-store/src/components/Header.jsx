import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobile = () => setMobileOpen(!mobileOpen);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-600">
                    AppStore
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                        Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                        Categories
                    </a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                        Top Charts
                    </a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                        About
                    </a>
                </nav>

                {/* Search & Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search apps..."
                        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                        Sign In
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={toggleMobile}
                    className="md:hidden focus:outline-none"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <nav className="md:hidden bg-white border-t">
                    <div className="flex flex-col p-4 space-y-2">
                        <a href="#" className="text-gray-700 hover:text-indigo-600">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">
                            Categories
                        </a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">
                            Top Charts
                        </a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">
                            About
                        </a>
                        <input
                            type="text"
                            placeholder="Search apps..."
                            className="mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        />
                        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                            Sign In
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
}
