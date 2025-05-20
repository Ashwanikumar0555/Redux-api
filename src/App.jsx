import React from 'react'
import Todo from './components/todo'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/Store'



function App() {
  

  return (
    <>
    <Provider store={store}>
     <Todo/>
     </Provider>
    </>
  )
}

export default App
