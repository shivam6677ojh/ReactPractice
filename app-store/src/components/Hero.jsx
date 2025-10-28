import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Using lucide-react for icons, make sure to install it: npm install lucide-react
import { Search, Star, Download, Apple, Bot, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// A keyframe animation for the floating effect
const GlobalStyles = () => (
    <style>{`
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delay-1 { animation-delay: 1s; }
    .animate-float-delay-2 { animation-delay: 2s; }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    .delay-200 { animation-delay: 0.2s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-600 { animation-delay: 0.6s; }
    .delay-800 { animation-delay: 0.8s; }
  `}</style>
);


const AppIcon = ({ icon, color, position, delay }) => {
    const IconComponent = icon;
    return (
        <div className={`absolute ${position} hidden lg:block`}>
            <div className={`flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-125 animate-float ${delay}`}>
                <IconComponent className={`w-8 h-8 ${color}`} />
            </div>
        </div>
    );
};

export default function Hero() {
    const slides = [
        { src: "https://placehold.co/1200x600/4f46e5/ffffff?text=Productivity+App", alt: "Productivity App Showcase" },
        { src: "https://placehold.co/1200x600/10b981/ffffff?text=Finance+App", alt: "Finance App Showcase" },
        { src: "https://placehold.co/1200x600/f59e0b/ffffff?text=Gaming+App", alt: "Gaming App Showcase" },
        { src: "https://placehold.co/1200x600/ef4444/ffffff?text=Social+App", alt: "Social App Showcase" }
    ];

    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const slideInterval = setInterval(next, 5000); // Change slide every 5 seconds
        return () => clearInterval(slideInterval);
    }, []);


    return (
        <>
            <GlobalStyles />
            <div className="relative w-full bg-gray-50 dark:bg-gray-900 overflow-hidden font-inter">
                <div className="absolute inset-0 bg-grid-gray-200/[0.5] dark:bg-grid-gray-800/[0.5] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-white dark:bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                {/* Floating App Icons for decoration */}
                <AppIcon icon={Apple} color="text-gray-500" position="top-[20%] left-[15%]" delay="animate-float-delay-1" />
                <AppIcon icon={Bot} color="text-blue-500" position="top-[30%] right-[12%]" delay="" />
                <AppIcon icon={Star} color="text-yellow-400" position="bottom-[25%] left-[25%]" delay="animate-float-delay-2" />
                <AppIcon icon={Download} color="text-green-500" position="bottom-[35%] right-[20%]" delay="animate-float-delay-1" />

                <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full animate-fadeInUp">
                            The Ultimate App Marketplace
                        </p>
                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl animate-fadeInUp delay-200">
                            Find Your Next Favorite App
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fadeInUp delay-400">
                            Discover a world of incredible apps, from productivity boosters to immersive games. Secure, curated, and ready for you to explore.
                        </p>

                        {/* Search Bar */}
                        <div className="mt-10 max-w-md mx-auto animate-fadeInUp delay-600">
                            <div className="relative group">
                                <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative flex items-center bg-white dark:bg-gray-900 ring-1 ring-gray-900/10 rounded-lg leading-none p-1">
                                    <Search className="h-5 w-5 text-gray-400 ml-3" />
                                    <input
                                        type="text"
                                        placeholder="Search for an app..."
                                        className="w-full pl-2 pr-4 py-3 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none"
                                    />
                                    <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-x-6 animate-fadeInUp delay-800">
                            <Link
                                to="/all-app"
                                className="rounded-md bg-gray-800 dark:bg-white px-6 py-3 text-base font-semibold text-white dark:text-gray-900 shadow-lg hover:bg-gray-700 dark:hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-transform transform hover:scale-105"
                            >
                                Browse All Apps
                            </Link>
                            <a href="#" className="text-base font-semibold leading-6 text-gray-900 dark:text-white group flex items-center gap-1">
                                For Developers <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Central visual element - Slider */}
                    <div className="relative mt-20 sm:mt-24 w-full max-w-4xl mx-auto">
                        <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10 bg-gray-200 dark:bg-gray-800">
                            <div className="flex transition-transform ease-out duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
                                {slides.map((s, i) => (
                                    <img
                                        key={i}
                                        src={s.src}
                                        alt={s.alt}
                                        className="w-full flex-shrink-0"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/cccccc/ffffff?text=Image+Not+Found'; }}
                                    />
                                ))}
                            </div>

                            {/* Slider Controls */}
                            <div className="absolute inset-0 flex items-center justify-between p-4">
                                <button onClick={prev} className="p-2 rounded-full shadow-md bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white hover:bg-white backdrop-blur-sm transition-colors">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={next} className="p-2 rounded-full shadow-md bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white hover:bg-white backdrop-blur-sm transition-colors">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Slider Dots */}
                        <div className="absolute -bottom-10 left-0 right-0">
                            <div className="flex items-center justify-center gap-2">
                                {slides.map((_, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`transition-all w-2.5 h-2.5 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-200 ${current === i ? "p-1.5 bg-gray-800 dark:bg-white" : "bg-opacity-50"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

