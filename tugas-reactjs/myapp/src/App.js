import Tugas6 from './tugas6/tugas6.js'
import Tugas7 from './tugas7/tugas7.js'
import Tugas8 from './tugas8/tugas8.js'

import React, { useState } from 'react';
import './App.css'

function App() {
  return (
    <>
      <Tugas6 />
      <Tugas7 name="Ariq Monetra" batch="48" email="ariqmonetra12@gmail.com" />
      <Tugas8 />
    </>
  )
}

export default App;