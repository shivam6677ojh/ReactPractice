import React from 'react';

// --- SVG Icons for Social Media ---
// Using SVGs directly ensures they load correctly without external files.

const FacebookIcon = () => (
    <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
        />
    </svg>
);

const TwitterIcon = () => (
    <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

const LinkedInIcon = () => (
    <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
        />
    </svg>
);

const InstagramIcon = () => (
    <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.225-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.802c-3.14 0-3.523.012-4.752.068-2.775.126-3.951 1.303-4.078 4.078-.056 1.23-.068 1.618-.068 4.752 0 3.133.012 3.523.068 4.752.126 2.775 1.303 3.951 4.078 4.078 1.23.056 1.618.068 4.752.068 3.133 0 3.523-.012 4.752-.068 2.775-.126 3.951-1.303 4.078-4.078.056-1.23.068-1.618.068-4.752 0-3.133-.012-3.523-.068-4.752-.126-2.775-1.303-3.951-4.078-4.078-1.23-.056-1.618-.068-4.752-.068zm0 3.191c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 4.802c-.993 0-1.8- S.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8zm3.031-4.87c.414 0 .75-.336.75-.75s-.336-.75-.75-.75-.75.336-.75.75.336.75.75.75z"
            clipRule="evenodd"
        />
    </svg>
);

// --- Footer Link Data ---
const footerLinks = {
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    products: [
        { name: 'Payment Gateway', href: '#' },
        { name: 'Payment Links', href: '#' },
        { name: 'RazorpayX', href: '#' },
        { name: 'Payroll', href: '#' },
        { name: 'Subscriptions', href: '#' },
    ],
    resources: [
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Pricing', href: '#' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Refund Policy', href: '#' },
        { name: 'Security', href: '#' },
    ],
};

const socialMedia = [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon },
];

// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Column 1: Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.company.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Products */}
                    <div className="mt-12 md:mt-0">
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                            Products
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.products.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="mt-12 md:mt-0">
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                            Resources
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.resources.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div className="mt-12 md:mt-0">
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.legal.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-base text-gray-300 hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Social Media / Contact */}
                    <div className="col-span-2 md:col-span-1 mt-12 md:mt-0">
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                            Follow Us
                        </h3>
                        <div className="flex space-x-5 mt-4">
                            {socialMedia.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon />
                                </a>
                            ))}
                        </div>
                        <div className="mt-8">
                            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                                Contact
                            </h3>
                            <p className="mt-3 text-base text-gray-300">
                                123 Fintech Avenue,
                                <br />
                                Bangalore, 560100
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-400 md:order-1">
                        &copy; {new Date().getFullYear()} Razorpay. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 md:order-2">
                        {/* You can add a simplified logo here if desired */}
                        {/* <RazorpayLogoSimple /> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer