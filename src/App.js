import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'

const App = () => {
  return (
    <div>
      <h1>Crypto Cafe <span className='text-xl'>☕</span></h1>

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  )
}

export default App
