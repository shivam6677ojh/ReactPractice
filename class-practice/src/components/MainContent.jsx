import React from 'react';

// --- SVG Icons for Features ---
const ZapIcon = () => (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
    </svg>
);

const ShieldCheckIcon = () => (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.611m8.618-3.04A12.02 12.02 0 0121 20.944a11.955 11.955 0 01-9 2.611m0-17.073a11.955 11.955 0 00-8.618 3.04m17.236 0A11.955 11.955 0 0012 2.944m8.618 3.04a11.955 11.955 0 01-8.618-3.04m0 17.073a11.955 11.955 0 008.618-3.04M3.382 5.984A11.955 11.955 0 0012 2.944m-8.618 3.04A11.955 11.955 0 0112 20.944m0-17.073A11.955 11.955 0 0120.618 5.984M12 2.944A11.955 11.955 0 003.382 5.984"
        ></path>
    </svg>
);

const GlobeAltIcon = () => (
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        ></path>
    </svg>
);

// --- Main Content Component ---
const MainContent = () => {
    return (
        <main className="flex-grow font-sans">
            {/* --- Hero Section --- */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                            Payments
                        </h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Power your business, anywhere.
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            The all-in-one payments solution. Accept, process, and disburse
                            payments with our developer-friendly APIs and
                            no-code solutions.
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <a
                                href="#"
                                className="text-white font-medium bg-blue-600 rounded-md px-6 py-3 text-base hover:bg-blue-700 transition-colors duration-200 shadow-md"
                            >
                                Sign Up Now
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 font-medium bg-white border border-blue-600 rounded-md px-6 py-3 text-base hover:bg-blue-50 transition-colors duration-200"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Features Section --- */}
            <div className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to handle payments
                        </h3>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Focus on your product and let us handle the complexities of
                            payments, banking, and compliance.
                        </p>
                    </div>

                    <div className="mt-16">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            {/* Feature 1 */}
                            <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                                <dt>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <ZapIcon />
                                    </div>
                                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center">
                                        Lightning Fast Checkout
                                    </p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    A seamless and fast checkout experience for your customers,
                                    optimized for conversion.
                                </dd>
                            </div>

                            {/* Feature 2 */}
                            <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                                <dt>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <ShieldCheckIcon />
                                    </div>
                                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center">
                                        Bank-Grade Security
                                    </p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    PCI-DSS Level 1 compliant, ensuring all your transactions are
                                    secure.
                                </dd>
                            </div>

                            {/* Feature 3 */}
                            <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                                <dt>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <GlobeAltIcon />
                                    </div>
                                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center">
                                        Global Payments
                                    </p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 text-center">
                                    Accept payments from all over the world in 100+ currencies.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </main>
    );
};


export default MainContent;