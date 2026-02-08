import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/counter/counterSlice.jsx'
import formReducer from '../Features/form/formSlice.js'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
  },
})

export default store