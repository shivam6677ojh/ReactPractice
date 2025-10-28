
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Counter from './components/Counter';
import { useEffect, useRef, useState } from 'react';


function App() {

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

      <Header />
      <MainContent />
      <Footer />
      {/* <Counter   /> */}

      {/* <h1>{count}</h1> */}

      {/* <div className='flex items-center justify-center h-screen bg-gray-600 '>

      <button className='bg-red-300 rounded-md text-black text-3xl text-center flex items-center justify-center' onClick={() => {
        alert(`${prompt('Enter value')}`);
      }}>
        click here to..
      </button>
</div> */}


    </>
  )
}

export default App
