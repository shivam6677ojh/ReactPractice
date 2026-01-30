// // form validation + tailwindcss styling

// import React, { useState } from "react";

// const Forms = () => {
//     const [data, setData] = useState();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [err, setError] = useState("");

//     function catchemail(e) {
//         setEmail(e.target.value);
//     }

//     function catchpassword(e) {
//         setPassword(e.target.value);
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         const newdata = { email, password };
//         setData(newdata);
//         console.log(newdata);

//         if (!email.includes("@")) {
//             setError("Invalid email address");
//             return;
//         }

//         if (password.length < 6) {
//             setError("Password must be at least 6 characters long");
//             return;
//         }

//         setError("");
//         setEmail("");
//         setPassword("");
//         alert("Form submitted successfully!");
//     }

//     return (
//         <div className="flex flex-row items-center justify-center h-screen bg-gray-100">
//             <form
//                 className="bg-white shadow-lg rounded-xl p-6 w-80 flex flex-col gap-4"
//                 onSubmit={handleSubmit}
//             >
//                 <input
//                     onChange={catchemail}
//                     value={email}
//                     type="text"
//                     placeholder="Enter email"
//                     className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 <input
//                     onChange={catchpassword}
//                     value={password}
//                     type="password"
//                     placeholder="Enter password"
//                     className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 {err && <span className="text-red-500 text-sm">{err}</span>}

//                 <button
//                     type="submit"
//                     className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Forms;



// uncontrolled with useRef with simple

// import React, { useRef, useState } from "react";

// const Forms = () => {
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const [err, setError] = useState("");

//     function handleSubmit(e) {
//         e.preventDefault();

//         const email = emailRef.current.value;
//         const password = passwordRef.current.value;

//         if (!email.includes("@")) {
//             setError("Invalid email address");
//             return;
//         }

//         if (password.length < 6) {
//             setError("Password must be at least 6 characters long");
//             return;
//         }

//         setError("");
//         alert("Form submitted successfully!");
//     }

//     return (
//         <div className="flex flex-row items-center justify-center h-screen bg-gray-100">
//             <form
//                 className="bg-white shadow-lg rounded-xl p-6 w-80 flex flex-col gap-4"
//                 onSubmit={handleSubmit}
//             >
//                 <input
//                     ref={emailRef}
//                     type="text"
//                     placeholder="Enter email"
//                     className="border border-gray-300 rounded-lg p-2 
//                      focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 <input
//                     ref={passwordRef}
//                     type="password"
//                     placeholder="Enter password"
//                     className="border border-gray-300 rounded-lg p-2 
//                      focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 {err && <span className="text-red-500 text-sm">{err}</span>}

//                 <button
//                     type="submit"
//                     className="bg-blue-600 text-white py-2 rounded-lg 
//                      hover:bg-blue-700 transition"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Forms;


// using regex for validation

import React, { useRef, useState } from "react";

const Forms = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [err, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!emailRegex.test(email)) {
            setError("Enter a valid email address (example: user@gmail.com)");
            return;
        }

        if (!passwordRegex.test(password)) {
            setError(
                "Password must be at least 6 characters and include letters + numbers"
            );
            return;
        }

        setError("");
        alert("Form submitted successfully!");
    }

    return (
        <div className="flex flex-row items-center justify-center h-screen bg-gray-100">
            <form
                className="bg-white shadow-lg rounded-xl p-6 w-80 flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    ref={emailRef}
                    type="text"
                    placeholder="Enter email"
                    className="border border-gray-300 rounded-lg p-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Enter password"
                    className="border border-gray-300 rounded-lg p-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {err && <span className="text-red-500 text-sm">{err}</span>}

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-lg 
                     hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Forms;
