// import React, { useReducer } from 'react'

// const CounterReducer = () => {


//     function reducer(state, action){
//         switch(action.type){
//             case "Increase" :
//                 return {count : state.count + 1}

//             case "Decrement" :
//                 return {count : state.count - 1}
            
//             case "Reset" :
//                 return {count : 0}

//             default :
//                 return state;
//         }
//     }

//     const [state, dispatch] = useReducer(reducer, { count : 0});

//     return (
//         <div>
//             <div>{state.count}</div>

//             <button onClick={() => dispatch({ type: "Increase"})}>Increment</button>
//             <button onClick={() => dispatch({ type: "Decrement"})}>Decrement</button> 
//             <button onClick={() => dispatch({ type: "Reset"})}>Reset</button>

//         </div>
//     )
// }

// export default CounterReducer