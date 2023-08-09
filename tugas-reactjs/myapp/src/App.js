import Tugas6 from './tugas6/tugas6.js'
import Tugas7 from './tugas7/tugas7.js'
import React from 'react';
import Welcome from './WelcomeComponent';
import './App.css'

function App() {
  return (
    <>
      <div>
        <Tugas6 />
      </div>
      <div>
        <Tugas7 name="Ariq Monetra" batch="48" email="ariqmonetra12@gmail.com" />
      </div>
    </>
  );
}

export default App;