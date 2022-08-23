import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import CoinDetails from './components/CoinDetails/CoinDetails'

const App = () => {
  return (
    <div>

      <Header></Header>
      {/* header ekhane karon every page e eke dekhate chai  */}

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
