import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import GameContextProvider from './contexts/GameContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <GameContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GameContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
