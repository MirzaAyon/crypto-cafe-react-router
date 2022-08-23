import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>

      <Header></Header>
      {/* header ekhane karon every page e eke dekhate chai  */}

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
