import React from 'react'
import CodeMateri from './CodeMateri'
import { GlobalProvider } from './GlobalContext'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './navbar'
import Home from './home'
import CodeCreate from './CodeCreate'
import Tugas6 from './tugas6/tugas6'
import Tugas7 from './tugas7/tugas7'
import Tugas8 from './tugas8/tugas8'
import Tugas9 from './tugas9/tugas9'
import Tugas10 from './tugas10/tugas10'
import Tugas11 from './tugas11/tugas11'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <GlobalProvider>

          <Routes>

            <Route path='/code-materi' element={<CodeMateri />} />
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CodeCreate />} />
            <Route path='/edit/:IdData' element={<CodeCreate />} />
            <Route path='/tugas6' element={<Tugas6 />} />
            <Route path='/tugas7' element={<Tugas7 name="Ariq Monetra" batch="48" email="ariqmonetra12@gmail.com" />} />
            <Route path='/tugas8' element={<Tugas8 />} />
            <Route path='/tugas9' element={<Tugas9 />} />
            <Route path='/tugas10' element={<Tugas10 />} />
            <Route path='/tugas11' element={<Tugas11 />} />

          </Routes>

        </GlobalProvider>
      </BrowserRouter>

    </>
  )

}

export default App