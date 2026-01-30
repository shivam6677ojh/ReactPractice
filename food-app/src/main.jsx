import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter >
    <App />
    </BrowserRouter>
  </StrictMode>,
)









// import { useState } from "react";

// export default function App() {
//   const [password, setPassword] = useState("");
//   const [strength, setStrength] = useState("");

//   const checkStrength = (value) => {
//     setPassword(value);

//     let score = 0;

//     if (value.length >= 8) score++;               // length rule
//     if (/[A-Z]/.test(value)) score++;             // uppercase letter
//     if (/[a-z]/.test(value)) score++;             // lowercase letter
//     if (/[0-9]/.test(value)) score++;             // number
//     if (/[^A-Za-z0-9]/.test(value)) score++;      // special character

//     if (value.length === 0) {
//       setStrength("");
//     } else if (score <= 2) {
//       setStrength("Weak");
//     } else if (score === 3 || score === 4) {
//       setStrength("Medium");
//     } else {
//       setStrength("Strong");
//     }
//   };

//   return (
//     <div>
//       <h2>Password Strength Meter</h2>

//       <input
//         type="password"
//         value={password}
//         onChange={(e) => checkStrength(e.target.value)}
//         placeholder="Enter password"
//       />

//       <p>Strength: {strength}</p>
//     </div>
//   );
// }
