import './App.css'

import Header from './components/Header';
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Counter from './components/Counter';
import { useEffect, useRef, useState } from 'react';
import DisplayFruits from './components/DisplayFruits';
// import QuoteGen from './components/QuoteGen';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Array from './components/Array';


function App() {

    // const name = "John Doe";
    // const age = 25;
    // const course = "Computer Science";

      // const [name, setname] = useState('');

      // const handleChange = (e) => {
      //   setname(e.target.value);
      // }

      // const showName = () => {
      //   console.log(name);
      // }
  
     

  // const [count, setcount] = useState(0);
  // const arr = useRef([]);
  // useEffect(() => {  // Mouting means entered in real dom 
  //   console.log(`Fetch ${count}`);
  // }, [count]);



  // const a = () => {
  //   arr.current.push(count);
  //   setcount(count + 1);
  //   console.log("Array values:", arr.current);
  // }

  return (
    <>

      {/* <Header />
      <MainContent />
      <Footer /> */}
      
      {/* <Counter   /> */}
      {/* <DisplayFruits /> */}
      {/* <QuoteGen /> */}

      {/* <Greeting name={name} showName={showName} handleChange={handleChange} /> */}

      {/* <h1>{count}</h1> */}

      {/* <div className='flex items-center justify-center h-screen bg-gray-600 '>

      <button className='bg-red-300 rounded-md text-black text-3xl text-center flex items-center justify-center' onClick={() => {
        alert(`${prompt('Enter value')}`);
      }}>
        click here to..
      </button>
</div> */}

  {/* <div className='bg-black h-screen w-screen flex items-center justify-center'>
    <button className='bg-blue-700 text-white rounded-xl p-5 m-4 hover:bg-red-400  cursor-pointer'>
      change color
    </button>
  </div> */}

    

    {/* <Card name={name} age={age} course={course} /> */}

   {/* <Array /> */}




    </>
  )
}

export default App
