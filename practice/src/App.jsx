import React from 'react'
import Counter from './components/Counter'
import { CounterProvider } from './context/CounterContext'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import ShowVal from './components/ShowVal'
import Reset from './components/Reset'

const App = () => {
  return (
    <CounterProvider>
      <div>
        <ShowVal />
        <Increment />
        <Decrement />
        <Reset />
      </div>
    </CounterProvider>
  )
}

export default App