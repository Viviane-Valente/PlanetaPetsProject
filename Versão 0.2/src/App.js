import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Adote from './routes/Adote';
import Login from './routes/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/adote' element={<Adote />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
