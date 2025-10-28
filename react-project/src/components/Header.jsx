import React, { useState } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="text-xl font-semibold text-indigo-600">
                    MyBrand
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600">Blog</a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <nav className="md:hidden bg-white border-t border-gray-100">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Home</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">About</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Blog</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</a>
                </nav>
            )}
        </header>
    );
}
