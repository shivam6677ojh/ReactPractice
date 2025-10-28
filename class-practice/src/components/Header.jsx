import { useState } from "react";



const RazorpayLogo = () => (
    <a href="#" className="flex items-center" aria-label="Razorpay Home">
        <svg
            className="h-7 w-auto"
            viewBox="0 0 120 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* "R" shape */}
            <path
                d="M23.1111 5.33331C22.3111 4.11109 20.9778 3.33331 19.3333 3.33331H10.8889C9.02222 3.33331 7.42222 4.0222 6.2 5.4222L1.86667 19.8666C0.466667 21.1333 0.355556 23.3111 1.62222 24.7111C2.9 26.1111 5.08889 26.2222 6.51111 24.9333L20.0222 5.55554C20.0889 5.48887 20.1556 5.44443 20.2222 5.4222C20.2444 5.4222 20.2667 5.4222 20.2889 5.4222H20.4C20.4667 5.4222 20.5333 5.4222 20.6 5.37776C20.6222 5.37776 20.6444 5.37776 20.6667 5.35554C20.7333 5.33331 20.8 5.31109 20.8667 5.28887C20.8889 5.26665 20.9111 5.26665 20.9333 5.24443C20.9778 5.2222 21.0444 5.2 21.1111 5.15554C21.1333 5.13331 21.1556 5.13331 21.1778 5.11109C21.2444 5.06665 21.3111 5.0222 21.3778 4.95554C21.4 4.93331 21.4222 4.91109 21.4444 4.88887C21.5111 4.8222 21.5778 4.75554 21.6444 4.68887C21.6667 4.66665 21.6889 4.64443 21.7111 4.6222C21.7778 4.55554 21.8222 4.48887 21.8889 4.4222C21.9111 4.4 21.9333 4.37776 21.9556 4.35554C22.0222 4.31109 22.0667 4.24443 22.1111 4.17776C22.1333 4.15554 22.1556 4.13331 22.1778 4.11109C22.2222 4.04443 22.2667 3.97776 22.3111 3.91109C22.3333 3.88887 22.3333 3.86665 22.3556 3.8222C22.4 3.75554 22.4444 3.68887 22.4667 3.6222C22.4889 3.6 22.4889 3.57776 22.5111 3.53331C22.5556 3.46665 22.5778 3.4 22.6222 3.33331V3.2222Z"
                fill="#2563EB"
            />
            <path
                d="M4.62222 24.1333C3.95556 23.3333 2.68889 23.2444 1.88889 23.9111C1.08889 24.5778 1 25.8444 1.66667 26.6444C2.33333 27.4444 3.6 27.5333 4.4 26.8666C5.2 26.2 5.28889 24.9333 4.62222 24.1333Z"
                fill="#2563EB"
            />
            {/* "azorpay" text */}
            <text
                x="28"
                y="21"
                fontFamily="Inter, sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="#1F2937"
            >
                azorpay
            </text>
        </svg>
    </a>
);

/**
 * SVG for the headset/support icon.
 */
const HeadsetIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 14h-1a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V8a10 10 0 0 1 20 0v2h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v2a6 6 0 0 1-12 0v-2z"
        ></path>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 14v-2a6 6 0 0 1-6-6v0"
        ></path>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 14v-2a6 6 0 0 0 6-6v0"
        ></path>
    </svg>
);

/**
 * SVG for the round Indian flag icon.
 */
const IndiaFlagIcon = () => (
    <svg
        className="w-6 h-6"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
            fill="white"
        />
        <path
            d="M18 36C27.9411 36 36 27.9411 36 18H18V36Z"
            fill="#138808"
        />
        <path
            d="M0 18C0 8.05887 8.05887 0 18 0V18H0Z"
            fill="#FF9933"
        />
        <path
            d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
            fill="white"
        />
        <path
            d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
            stroke="#000080"
            strokeWidth="1.5"
        />
        <path d="M18 15V21" stroke="#000080" strokeWidth="0.75" />
        <path d="M15 18H21" stroke="#000080" strokeWidth="0.75" />
        <path d="M16.05 16.05L19.95 19.95" stroke="#000080" strokeWidth="0.75" />
        <path d="M16.05 19.95L19.95 16.05" stroke="#000080" strokeWidth="0.75" />
    </svg>
);

/**
 * SVG for the mobile menu (hamburger) icon.
 */
const MenuIcon = () => (
    <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
        />
    </svg>
);

/**
 * SVG for the mobile menu close (X) icon.
 */
const CloseIcon = () => (
    <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

// --- Navigation Data ---
const navLinks = [
    { name: 'Payments', href: '#' },
    { name: 'Banking+', href: '#' },
    { name: 'Payroll', href: '#' },
    { name: 'Engage', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Pricing', href: '#' },
];

// --- Header Component ---
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm relative z-10 font-sans">
            {/* --- Desktop Header --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Section: Logo + Nav Links */}
                    <div className="flex items-center space-x-8">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <RazorpayLogo />
                        </div>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section: Icons + Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="p-1 rounded-full text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <span className="sr-only">Support</span>
                            <HeadsetIcon />
                        </button>
                        <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <span className="sr-only">Change language</span>
                            <IndiaFlagIcon />
                        </button>
                        <a
                            href="#"
                            className="text-blue-600 font-medium border border-blue-600 rounded-md px-5 py-2 text-sm hover:bg-blue-50 transition-colors duration-200"
                        >
                            Login
                        </a>
                        <a
                            href="#"
                            className="text-white font-medium bg-blue-600 rounded-md px-5 py-2 text-sm hover:bg-blue-700 transition-colors duration-200"
                        >
                            Sign Up
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu Panel --- */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200"
                    id="mobile-menu"
                >
                    {/* Mobile Nav Links */}
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Buttons and Icons */}
                    <div className="pt-4 pb-3 border-t border-gray-200 px-5">
                        <div className="flex items-center space-x-4 mb-3">
                            <button className="p-1 rounded-full text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="sr-only">Support</span>
                                <HeadsetIcon />
                            </button>
                            <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="sr-only">Change language</span>
                                <IndiaFlagIcon />
                            </button>
                        </div>
                        <div className="space-y-2">
                            <a
                                href="#"
                                className="block w-full text-center text-blue-600 font-medium border border-blue-600 rounded-md px-5 py-2 text-sm hover:bg-blue-50 transition-colors duration-200"
                            >
                                Login
                            </a>
                            <a
                                href="#"
                                className="block w-full text-center text-white font-medium bg-blue-600 rounded-md px-5 py-2 text-sm hover:bg-blue-700 transition-colors duration-200"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;