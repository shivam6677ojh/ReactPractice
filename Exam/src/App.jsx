// import './App.css'
// import { CounterStateProvider } from './Context/CounterContext'
// import Increment from './Components/Increment'
// import Counter from './Components/Counter'
// import Decrement from './Components/Decrement'
// import Reset from './Components/Reset'

// function App() {

//   return (
//       <CounterStateProvider>

//           <div>welcome!!</div>
//           <Counter />
//           <Increment />
//           <Decrement />
//           <Reset />



//       </CounterStateProvider>
//   )
// }

// export default App


// Dealing with froms
// import React from 'react'
// import UseContext from './Components/UseContext'

// const App = () => {
//   return (
//     <div><UseContext /></div>
//   )
// }

// export default App


import React from 'react'
import Form from './Components/Form'
import DataPrint from './Components/DataPrint'
// import CounterReducer from './Components/CounterReducer'

const App = () => {
  return (

    <div>

      {/* <Form /> */}
      <DataPrint />

      {/* <CounterReducer /> */}

    </div>
  )
}

export default App