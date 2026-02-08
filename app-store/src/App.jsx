
import './App.css'
import Decrement from './components/Decrement.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Increment from './components/Increment.jsx'
import Reset from './components/Reset.jsx'
import ShowState from './components/ShowState.jsx'

function App() {
  
  return (
    <>
    {/* <Header />
    <Hero /> */}
    <ShowState />
    <Increment />
    <Decrement />
    <Reset />
    </>
  )
}

export default App
