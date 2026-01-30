
// import { useState } from 'react'
// import './App.css'
// import Cards from './components/Card'
// import { AuthContext } from './context/AuthContext';
// import NavBar from './components/NavBar';

import { use, useState } from "react"

// function App() {

//   // const objectcard = [
//   //   {
//   //     "id": 1,
//   //     "company": "Facebook",
//   //     "cardHolder": "Alice Morgan",
//   //     "cardNumber": "4532 7810 9901 2234",
//   //     "expiry": "08/28"
//   //   },
//   //   {
//   //     "id": 2,
//   //     "company": "Amazon",
//   //     "cardHolder": "Brian O'Connor",
//   //     "cardNumber": "5268 4400 1134 9902",
//   //     "expiry": "11/27"
//   //   },
//   //   {
//   //     "id": 3,
//   //     "company": "Apple",
//   //     "cardHolder": "Sophie Lin",
//   //     "cardNumber": "3712 998320 44120",
//   //     "expiry": "04/29"
//   //   },
//   //   {
//   //     "id": 4,
//   //     "company": "Netflix",
//   //     "cardHolder": "Marcus Dean",
//   //     "cardNumber": "6011 5521 4432 1209",
//   //     "expiry": "02/30"
//   //   },
//   //   {
//   //     "id": 5,
//   //     "company": "Google",
//   //     "cardHolder": "Elena Torres",
//   //     "cardNumber": "4485 3021 5598 2231",
//   //     "expiry": "07/28"
//   //   },
//   //   {
//   //     "id": 6,
//   //     "company": "Meta",
//   //     "cardHolder": "Daniel Kim",
//   //     "cardNumber": "5301 8843 9934 6621",
//   //     "expiry": "01/27"
//   //   },
//   //   {
//   //     "id": 7,
//   //     "company": "Amazon",
//   //     "cardHolder": "Priya Raman",
//   //     "cardNumber": "6011 8832 4410 2290",
//   //     "expiry": "10/29"
//   //   },
//   //   {
//   //     "id": 8,
//   //     "company": "Apple",
//   //     "cardHolder": "Victor Hughes",
//   //     "cardNumber": "3749 002912 88321",
//   //     "expiry": "03/31"
//   //   },
//   //   {
//   //     "id": 9,
//   //     "company": "Netflix",
//   //     "cardHolder": "Lara Schmidt",
//   //     "cardNumber": "4532 8991 2234 5578",
//   //     "expiry": "05/26"
//   //   },
//   //   {
//   //     "id": 10,
//   //     "company": "Google",
//   //     "cardHolder": "Oscar Delgado",
//   //     "cardNumber": "5290 4401 7712 8841",
//   //     "expiry": "12/28"
//   //   }
//   // ]

//   // const pagescrolling =  (e) => {
//   //     console.log(e.deltaY);
//   // }

//   {/* Array and How to to do operations in useState */ }
//   // const [value, setvalue] = useState([10,30,40,50]);

//   // function changeitname(){
//   //   const newname = [...value]
//   //   newname.push(10);
//   //   console.log(newname);
//   //   setvalue(newname)
//   // }

//   // const popit = () => {
//   //   const newname = [...value]
//   //   newname.pop();
//   //   newname.findIndex
//   //   setvalue(newname);
//   // }

//   // const [val, setval] = useState("");

//   // const valuecatch = (e) => {
//   //   const v = e.target.value;
//   //   console.log(v);
//   //   setval(v);
//   // }

//   // const clearInput = () => {
//   //   setval("");
//   // }

//   // const formsubmit = (e) => {
//   //   e.preventDefault();

//   //   console.log(val);

//   // }

//   // const showstate = () => {
//   //   console.log(val);
//   // }
//   // const [login, setLogin] = useState(false);


//   return (

//     <>
//       {/* <div className='bg-black  text-white flex-wrap w-full' >
//           {objectcard.map((elem) => {
//               return <Cards company={elem.company} />
//           })}
//       </div> */}

//       {/* <div onWheel={(e) => {
//         pagescrolling(e);
//       }}>
//         <div className='bg-red-400 h-400'>

//         </div>
//         <div className='bg-green-500 h-400'>

//         </div>
//         <div className='bg-red-400 h-400'>

//         </div>
//       </div> */}


//       {/* Array and How to to do operations in useState */}
//       {/* <div>
//         <h1 className=' bold h-30 w-30 text-4xl'>{value}</h1>
//         <button onClick={changeitname}>click it</button>
//         <button onClick={popit}>pop it</button>
//       </div> */}

//       {/* <div>
//         <form onSubmit={formsubmit} >

//           <input className=' bg-gray-400 p-5 m-5 text-2xl border-2 border-black' placeholder='Enter to add' 
//           type="text" 
//           val={val}
//           onChange={valuecatch}
//           />
//           <button onClick={showstate} className='bg-red-300 border-2 p-5 m-5'>Submit it</button>
//           <button type='button' onClick={clearInput} className='bg-red-300 border-2 p-5 m-5'>clear it</button>
//         </form>
//       </div> */}


//         {/* for context api use */}
//       {/* <AuthContext.Provider value={{ login, setLogin }}>
//         <NavBar />
//       </AuthContext.Provider> */}

//         <div>

//         </div>
//     </>
//   )
// }

// export default App



// // ***************** for context api use ***************************************
// import React from "react";
// import { AllStateProvider } from "./context/AllState";
// // import { AuthProvider } from "./context/AuthContext";
// import NavBar from "./components/NavBar";
// import ShowState from "./components/ShowState";
// import Increment from "./components/Increment";
// import Decrement from "./components/Decrement";
// import Reset from "./components/Reset";

// const App = () => {
//   return (
//     // <AuthProvider>
//       <AllStateProvider>
//         <div className="p-4 space-y-4">
//       <h1>HI</h1>
//           {/* <NavBar /> */}
//           <ShowState />
//           <div className="flex gap-2">
//             <Increment />
//             <Decrement />
//             <Reset />
//           </div>
//         </div>
//       </AllStateProvider>
//     // </AuthProvider>
//   );
// };

// export default App;



// useeeffect and usestate example
// import React, { useEffect, useState } from "react";


// const App = () => {

//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         const Increment = setInterval(() => {
//             setValue((pre) => prev + 1);
            
//         }, 1000);

//         return () => {
//             clearInterval(Increment);
//         };
//     }, [])
//     return (
//         <>
//             <h1>Increment: {value}</h1>
//         </>
//     )
// };

// export default App;


// const todo app

// import React, { useState } from "react";

// const App = () => {

//     const [items, setItems] = useState([]); 
//     const [inputValue, setInputValue] = useState("");


    

//     const addItem = () => {
//         if (inputValue.trim() !== "") {
//             setItems([...items, inputValue]);
//             setInputValue("");
//         }
//     };
    
//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Todo App</h1>
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     className="border p-2 mr-2"
//                     placeholder="Enter a task"
//                 />
//                 <button
//                     onClick={addItem}
//                     className="bg-blue-500 text-white p-2 rounded"
//                 >
//                     Add Task
//                 </button>
//             </div>
//             <ul className="list-disc pl-5">
//                 {items.map((item, index) => (
//                     <li key={index} className="mb-2">{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default App;


// Toggle message visibility example
// import React from "react"

// const App = () => {
//     const [visible, setvisible] = useState(false);

//     return (
//         <div className="p-4">
//             <button 
//                 className="bg-blue-500 text-white p-2 rounded mb-4"
//                 onClick={() => setvisible(!visible)}
//             >
//                 {visible ? "Hide" : "Show"} Message
//             </button>
            
//             {visible && (
//                 <div className="bg-green-200 p-4 rounded">
//                     <h2 className="text-xl font-bold">Hello, this is a toggled message!</h2>
//                     <p>This message is now visible. Click the button again to hide it.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;


// import React from "react"
// import ColorSwitcher from "./components/ColorSwitcher";


// const App = () => {
//     return <>
//         <ColorSwitcher />
//     </>
// }

// export default App;


import React from 'react'
import Calculator from "./components/Calculator"
import ShowData from "./components/ShowData"

const App = () => {
  return (
    // <Calculator />/
    <ShowData />
  )
}

export default App

