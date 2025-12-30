import React from 'react'
import  { useRef, useState } from 'react';


// const allQuotes = [
//     "Dream big, start small.",
//     "Stay humble, hustle hard.",
//     "Do it with passion or not at all.",
//     "Good vibes only.",
//     "Make it happen.",
//     "Less talk, more action.",
//     "Be your own reason to smile.",
//     "Keep going, you’re growing."
// ];

// const QuoteGen = () => {
//     const [quotes, setQuotes] = useState(allQuotes);
//     const [currentQuote, setCurrentQuote] = useState(quotes[0]);

//     const val = useRef();

//     function catchval(){
//         const newQuote = val.current.value;
//         const updatedQuotes = [...quotes, newQuote];
//         setQuotes(updatedQuotes);
//         setCurrentQuote(newQuote);
//         val.current.value = "";
//     }

//     function handleRandomShow() {
//         const randomIndex = Math.floor(Math.random() * quotes.length);
//         setCurrentQuote(quotes[randomIndex]);
//     }

//     function addQuote() {
//         const newQuote = prompt("Enter a new quote:");
//         if (!newQuote || newQuote.trim() === "") return;
//         const updatedQuotes = [...quotes, newQuote];
//         setQuotes(updatedQuotes);
//         setCurrentQuote(newQuote);
//     }

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 font-poppins">
//             <h2 className="text-3xl font-semibold text-gray-800 mb-8">✨ Quote Generator ✨</h2>

//             <p className="text-lg md:text-xl italic text-gray-700 bg-white px-6 py-4 rounded-2xl shadow-lg w-11/12 md:w-2/3 text-center mb-8 transition-all duration-300">
//                 "{currentQuote}"
//             </p>

//             <div className="space-x-4">
//                 <button
//                     onClick={handleRandomShow}
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow transition duration-300"
//                 >
//                     Show Random
//                 </button>

//                 <input ref={val} className='border-2 border-yellow-400' placeholder='enter quote ' type="text" />

//                 <button
//                     // onClick={addQuote}
//                     onClick={catchval}

//                     className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow transition duration-300"
//                 >
//                     Add Quote
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default QuoteGen;







