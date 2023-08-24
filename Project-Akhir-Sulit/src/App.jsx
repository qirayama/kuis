import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './home.jsx'
import Login from './login.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>

    </>
  )

}

export default App