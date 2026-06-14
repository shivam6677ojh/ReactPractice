import React, { useEffect, useState } from 'react';

const Task1 = () => {
    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchCatFact = async () => {
        try {
            setLoading(true);
            setError('');

            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();

            setFact(data.fact || 'Could not load a cat fact right now.');
        } catch (err) {
            setError('Something went wrong while fetching the cat fact.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCatFact();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white shadow-xl rounded-2xl px-8 py-6 max-w-xl w-full">
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl font-bold">
                        🐱
                    </div>
                    <h1 className="text-xl sm:text-2xl font-semibold text-slate-800">
                        Random Cat Fact
                    </h1>
                </div>

                <p className="text-sm text-slate-500 mb-4">
                    Click the button to get a new random cat fact without reloading the page.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 min-h-[96px] flex items-center justify-center text-center mb-6">
                    {loading && (
                        <span className="text-slate-500 text-sm">Loading a purr-fect fact...</span>
                    )}
                    {!loading && error && (
                        <span className="text-red-500 text-sm">{error}</span>
                    )}
                    {!loading && !error && (
                        <span className="text-slate-700 text-base leading-relaxed">{fact}</span>
                    )}
                </div>

                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={fetchCatFact}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium rounded-full shadow-md transition-colors duration-150"
                    >
                        Get New Fact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Task1;