import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} MyBrand. All rights reserved.
            </div>
        </footer>
    );
}
