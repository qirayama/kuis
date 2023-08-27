import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import JobContextProvider from './contexts/JobContext'
import AuthContextProvider from './contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <AuthContextProvider>
        <JobContextProvider>
          <App />
        </JobContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
